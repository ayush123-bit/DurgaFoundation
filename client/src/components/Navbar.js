import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <TextField
        variant="outlined"
        placeholder="Search"
        style={searchBoxStyle}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            height: '30px',         
            padding: '0 8px',       
            fontSize: '14px',      
            lineHeight: '1.2',      
          },
        }}
      />
      <div style={userInfoStyle}>
        <img
          src="images/u6.jpeg"
          alt="User"
          style={userImageStyle}
        />
        <span style={{ marginRight: '20px' }}>Fakhar Naveed</span>
      </div>
    </div>
  );
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#f0f0f5'
};

const searchBoxStyle = {
  width: '300px', 
  borderRadius: '4px',
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center'
};

const userImageStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '10px'
};

const buttonStyle = {
  margin: '0 5px',
  padding: '5px 10px',
  background: '#ddd',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Navbar;
