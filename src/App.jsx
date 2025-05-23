import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import PersonList from "./pages/PersonList/PersonList.jsx";
import About from "./pages/About/About.jsx";
import AddEmployee from "./pages/AddEmployee/AddEmployee.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Root from "./pages/Root.jsx";

function App() {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => {
        setEmployeesData(res.data);
      })
      .catch((err) => console.error("Fetch error", err));
  }, []);

  const addEmployeeHandler = (newEmployee) => {
    setEmployeesData((prev) => [...prev, newEmployee]);
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route
            index
            element={
              <PersonList
                employeesData={employeesData}
                setEmployeesData={setEmployeesData}
                onFormSave={handlePersonCardFormSave}
              />
            }
          ></Route>

          <Route path="/about" element={<About />}></Route>

          <Route
            path="/add"
            element={<AddEmployee onAddEmployee={addEmployeeHandler} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
