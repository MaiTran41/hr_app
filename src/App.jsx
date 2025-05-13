import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import PersonList from "./pages/PersonList.jsx";
import About from "./pages/About.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PersonList
          employeesData={employeesData}
          setEmployeesData={setEmployeesData}
        />
      ),
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/add",
      element: <AddEmployee onAddEmployee={addEmployeeHandler} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
