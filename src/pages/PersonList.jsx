import PersonCard from "../components/Person/PersonCard";
import { employees } from "../data/employeeData";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PersonList = ({ employeesData, setEmployeesData }) => {
  return (
    <>
      <Header logo="Mai Tran"></Header>
      <h2>Employee List</h2>
      <div className="employee-card-container">
        {employeesData.map((employee) => (
          <PersonCard key={employee.id} {...employee} />
        ))}
      </div>
      <Footer year={2025}></Footer>
    </>
  );
};

export default PersonList;
