import PersonCard from "./PersonCard";
import { employees } from "./employee";

const PersonList = () => {
  return (
    <>
      <h2>Employee List</h2>
      <div className="employee-card-container">
        {employees.map((employee) => (
          <PersonCard key={employee.id} {...employee} />
        ))}
      </div>
    </>
  );
};

export default PersonList;
