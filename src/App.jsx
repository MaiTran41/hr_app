import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import PersonList from "./pages/PersonList.jsx";
import About from "./pages/About.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import { employees } from "./data/employeeData.js";
import { useState } from "react";

function App() {
  const [employeesData, setEmployeesData] = useState(employees);

  const addEmployeeHandler = (newEmployee) => {
    setEmployeesData((prev) => [...prev, { ...newEmployee, id: Date.now() }]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonList employeesData={employeesData} />,
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
