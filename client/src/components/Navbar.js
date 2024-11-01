import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <TextField
        variant="outlined"
        placeholder="Search"
        className="searchBox" // Apply CSS class
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
      <div className="userInfo"> {/* Apply CSS class */}
        <img
          src="images/u6.jpeg"
          alt="User"
          className="userImage" // Apply CSS class
        />
        <span className="userName">Fakhar Naveed</span> {/* Apply CSS class */}
      </div>
    </div>
  );
};

export default Navbar;
