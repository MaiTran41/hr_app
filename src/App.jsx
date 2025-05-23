import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import PersonList from "./pages/PersonList/PersonList.jsx";
import About from "./pages/About/About.jsx";
import AddEmployee from "./pages/AddEmployee/AddEmployee.jsx";
import Root from "./pages/Root.jsx";
import { useEmployeesData } from "./hooks/useEmployeesData.js";

function App() {
  const { employeesData, addEmployeeHandler, handlePersonCardFormSave } =
    useEmployeesData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route
            index
            element={
              <PersonList
                employeesData={employeesData}
                // setEmployeesData={setEmployeesData}
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
