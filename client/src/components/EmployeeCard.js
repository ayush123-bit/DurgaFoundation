import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div style={cardStyle}>
      <div style={topSectionStyle}>
        <img src={employee.image} alt={employee.name} style={imageStyle} />
        <div style={infoStyle}>
          <h3 style={nameStyle}>{employee.name}</h3>
          <p style={roleStyle}>{employee.role}</p>
        </div>
      </div>
      <p style={emailStyle}>Email: <span style={emailValueStyle}>{employee.email}</span></p>
      <div style={buttonContainerStyle}>
        <button style={cardButtonStyleBlock}>Block</button>
        <button style={cardButtonStyleDetails}>Details</button>
      </div>
    </div>
  );
};

const cardStyle = {
  width: '350px', 
  margin: '15px',
  padding: '20px',
  backgroundColor: '#ddd',
  borderRadius: '8px',
  textAlign: 'left',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const topSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px'
};

const imageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  marginRight: '15px'
};

const infoStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const nameStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: 0
};

const roleStyle = {
  fontSize: '14px',
  color: '#555',
  margin: 0
};

const emailStyle = {
  fontSize: '14px',
  color: '#555',
  marginLeft: '78px',
  marginTop: '10px', 
  marginBottom: '35px'
};

const emailValueStyle = {
  fontWeight: 'bold',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  width: '100%',
  marginTop: '10px'
};

const cardButtonStyleBlock = {
  width: '40%', 
  padding: '6px 0', 
  backgroundColor: 'white',
  color: 'black',
  border: '2px solid black',
  borderRadius: '3px',
  cursor: 'pointer',
};

const cardButtonStyleDetails = {
  width: '40%', 
  padding: '6px 0', 
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

export default EmployeeCard;
