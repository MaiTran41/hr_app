import styles from "./PersonList.module.css";
import PersonCard from "../../components/PersonCard/PersonCard";
import { useState } from "react";
import BackToTopBtn from "../../components/BackToTopBtn/BackToTopBtn";

const PersonList = ({ employeesData, onFormSave }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandle = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredEmployees = employeesData.filter((employee) => {
    const search = searchValue.toLowerCase();

    console.log(employee);
    const matchesSearch =
      employee.name.trim().toLowerCase().includes(search) ||
      employee.title.trim().toLowerCase().includes(search) ||
      employee.department.trim().toLowerCase().includes(search);

    return matchesSearch;
  });

  return (
    <>
      <div className={styles.employeeListContainer}>
        <h2 className={styles.heading}>Employee List</h2>

        <div className={styles.searchContainer}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            name="search"
            value={searchValue}
            onChange={searchHandle}
          />
        </div>

        <div className={styles.employeeListWrapper}>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <PersonCard
                key={employee.id}
                {...employee}
                onFormSave={onFormSave}
              />
            ))
          ) : (
            <p className={styles.searchMessage}>
              Plot twist: Nothing found! 🎬 The search continues in episode 2...
            </p>
          )}
        </div>
      </div>

      <BackToTopBtn showAfter={200} />
    </>
  );
};

export default PersonList;
