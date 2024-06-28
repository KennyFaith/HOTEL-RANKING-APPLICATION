// import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../Styles/Navbar.css";

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: "black" }}>
    <Toolbar className="toolBar">
      <Typography variant="h6">Hotel Ranking App</Typography>
      <div className="links">
        <Link to="/"> Hotels </Link>
        <Link to="/hotels/:id">Hotel List</Link>
        <Link to="/categories"> Hotel Categories </Link>
        <Link to="/add"> Add Hotels </Link>
        <Link to="/add-category"> Add Hotels Category </Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default Navbar;
