import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <TextField
        variant="outlined"
        placeholder="Search"
        className="searchBox" 
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
      <div className="userInfo"> 
        <img
          src="images/u6.jpeg"
          alt="User"
          className="userImage" 
        />
        <span className="userName">Fakhar Naveed</span> 
      </div>
    </div>
  );
};

export default Navbar;
