import axios from "axios";
import { useEffect, useState } from "react";

export const useEmployeesData = () => {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => {
        setEmployeesData(res.data);
      })
      .catch((err) => console.error("Fetch error", err));
  }, []);

  const addEmployeeHandler = async (newEmployee) => {
    const res = await axios.post(
      "http://localhost:3001/employees",
      newEmployee
    );

    setEmployeesData((prev) => [...prev, res.data]);
  };

  const handlePersonCardFormSave = async ({
    id,
    salary,
    location,
    department,
    skills,
  }) => {
    const res = await axios.patch(`http://localhost:3001/employees/${id}`, {
      salary,
      location,
      department,
      skills,
    });

    setEmployeesData((prev) =>
      prev.map((employee) =>
        employee.id === id ? { ...employee, ...res.data } : employee
      )
    );
  };

  return { employeesData, addEmployeeHandler, handlePersonCardFormSave };
};
