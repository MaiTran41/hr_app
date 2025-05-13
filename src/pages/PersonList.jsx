import PersonCard from "../components/Person/PersonCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";

const PersonList = ({ employeesData, setEmployeesData }) => {
  return (
    <>
      <Header logo="Mai Tran"></Header>
      <div className="employee-list-container">
        <h2>Employee List</h2>
        <div className="employee-list-wrapper">
          {employeesData.map((employee) => (
            <PersonCard key={employee.id} {...employee} />
          ))}
        </div>
      </div>
      <Footer year={2025}></Footer>
    </>
  );
};

export default PersonList;
