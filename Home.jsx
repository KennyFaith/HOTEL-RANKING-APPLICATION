import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>
        CHECK OUT OUR HOTEL <Link to="/hotels/:id"> here </Link>
      </h1>
    </div>
  );
};

export default Home;

// import React from "react";
// import HotelList from "../Components/HotelList";
// import HotelForm from "../Components/HotelForm";
// import { Container, Grid } from "@mui/material";

// const Home = () => {
//   return (
//     <div>
//       <h1> CHECK OUT OUR HOTEL here</h1>
//     </div>
// <Container>
//   <h1> Whats Popping </h1>
//   <Grid container spacing={2}>
//     <Grid item xs={12} md={6}>
//       <HotelForm />
//     </Grid>
//     <Grid item xs={12} md={6}>
//       <HotelList />
//     </Grid>
//   </Grid>
// </Container>
//);
//};

//export default Home;
