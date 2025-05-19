import { useEffect, useState } from "react";
import "../PersonList/PersonList.css";
import PersonCard from "../../components/PersonCard/PersonCard";

const PersonList = ({ employeesData, setEmployeesData }) => {
  return (
    <>
      <div className="employee-list-container">
        <h2>Employee List</h2>
        <div className="employee-list-wrapper">
          {employeesData.map((employee) => (
            <PersonCard key={employee.id} {...employee} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PersonList;
