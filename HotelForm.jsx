import { useState, useEffect } from "react"; //React,
import { useDispatch } from "react-redux";
import { addHotel } from "../Redux/HotelSlice";
import { fetchCountries } from "../Api/CountryApi";
import { TextField, Button, MenuItem } from "@mui/material";
import { Container, Typography, Paper } from "@mui/material";

const HotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    address: "",
    category: "",
  });
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCountries = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };
    getCountries();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel({ ...formData, id: Date.now() }));
    setFormData({ name: "", country: "", address: "", category: "" });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Hotel
      </Typography>
      <Paper style={{ padding: 16 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Hotel Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            select
            fullWidth
            margin="normal"
            required
          >
            {countries.map((country) => (
              <MenuItem key={country.city} value={country.country}>
                {country.country}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Hotel
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default HotelForm;
