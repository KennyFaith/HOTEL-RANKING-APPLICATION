import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Hotel = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
        );
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  const getRandomHotelName = () => {
    const hotelNames = [
      "The Grand Hotel",
      "Sunset Resort",
      "Oceanview Inn",
      "Mountain Lodge",
      "City Center Hotel",
    ];
    return hotelNames[Math.floor(Math.random() * hotelNames.length)];
  };

  const getRandomAddress = () => {
    const addresses = [
      "123 Main St, Anytown",
      "456 Maple Ave, Somewhere",
      "789 Elm St, Nowhere",
      "101 Pine St, Here",
      "202 Oak St, There",
    ];
    return addresses[Math.floor(Math.random() * addresses.length)];
  };

  return (
    <div>
      <h1>Hotel Detail Page</h1>
      {countries.map((country, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/140" // Placeholder image
              alt="Hotel Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {getRandomHotelName()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: {getRandomAddress()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country: {country.country}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Hotel;
