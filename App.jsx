// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Container, Typography } from "@mui/material";
import { store } from "./Redux/Store";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Hotel from "./Pages/Hotel";
import HotelForm from "./Components/HotelForm";
import HotelList from "./Components/HotelList";
// import CategoryForm from "./Components/CategoryForm";
import "./Styles/App.css";
// import { Home } from "@mui/icons-material";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Container className="container">
          <Typography variant="h4" className="headerText">
            HOTEL RANKING APP
          </Typography>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/add" element={<HotelForm />} />
            <Route path="/categories" element={<HotelList />} />
            {/* <Route path="/add-category" element={<CategoryForm />} /> */}
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
