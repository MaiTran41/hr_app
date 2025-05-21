import styles from "../PersonList/PersonList.module.css";
import PersonCard from "../../components/PersonCard/PersonCard";

const PersonList = ({ employeesData, onSalaryChange }) => {
  return (
    <>
      <div className={styles.employeeListContainer}>
        <h2 className={styles.heading}>Employee List</h2>
        <div className={styles.employeeListWrapper}>
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
