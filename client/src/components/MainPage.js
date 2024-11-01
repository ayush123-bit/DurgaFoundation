import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import employeesData from '../data/employees.json';

const MainPage = () => {
  const [employees, setEmployees] = useState([]);
  
  // Loading employee data from JSON
  useEffect(() => {
    setEmployees(employeesData);
  }, []);
  
  return (
    <div style={mainPageStyle}>
      <div style={headerContainerStyle}>
        <h2 style={headingStyle}>Employees</h2>
        <div style={buttonContainerStyle}>
          <button style={filterButtonStylea}>All</button>
          <button style={filterButtonStyle}>Active</button>
          <button style={filterButtonStyle}>Inactive</button>
        </div>
      </div>
      <div style={cardsContainerStyle}>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

const mainPageStyle = {
  padding: '20px',
  backgroundColor: '#f0f0f5'
};

const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px'
};

const headingStyle = {
  fontWeight: 'bold',
  fontSize: '24px',
  margin: 0
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px'
};

const filterButtonStyle = {
  padding: '6px 20px',
  backgroundColor: '#ddd',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px'
};

const filterButtonStylea = {
  padding: '6px 20px',
  backgroundColor: '#A259FF',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  color: 'white'
};

const cardsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  justifyContent: 'center',
};

export default MainPage;
