// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteHotel } from "../Redux/HotelSlice";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const HotelList = () => {
  const hotels = useSelector((state) => state.hotels.hotels);
  const dispatch = useDispatch();

  return (
    <List>
      {hotels.map((hotel) => (
        <ListItem key={hotel.id}>
          <ListItemText
            primary={hotel.name}
            secondary={`${hotel.country}, ${hotel.address}`}
          />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => dispatch(deleteHotel(hotel.id))}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default HotelList;
