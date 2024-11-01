import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import employeesData from '../data/employees.json';
import './MainPage.css'; 

const MainPage = () => {
  const [employees, setEmployees] = useState([]);

  
  useEffect(() => {
    setEmployees(employeesData);
  }, []);

  return (
    <div className="main-page">
      <div className="header-container">
        <h2 className="heading">Employees</h2>
        <div className="button-container">
          <button className="filter-button filter-button-active">All</button>
          <button className="filter-button">Active</button>
          <button className="filter-button">Inactive</button>
        </div>
      </div>
      <div className="cards-container">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
