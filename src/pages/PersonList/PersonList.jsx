import "../PersonList/PersonList.css";
import PersonCard from "../../components/PersonCard/PersonCard";

const PersonList = ({ employeesData, onSalaryChange }) => {
  return (
    <>
      <div className="employee-list-container">
        <h2>Employee List</h2>
        <div className="employee-list-wrapper">
          {employeesData.map((employee) => (
            <PersonCard
              key={employee.id}
              {...employee}
              onSalaryChange={(id, newSalary) => onSalaryChange(id, newSalary)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PersonList;
