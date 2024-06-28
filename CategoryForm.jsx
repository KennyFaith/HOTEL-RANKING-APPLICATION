// import { useState } from "react"; //React,
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { TextField, Button, Container, Typography } from "@mui/material";
// import { addCategory, updateCategory } from "../Redux/Actions/categoryActions";
// import "./HotelCategoryForm.css";

// const HotelCategoryForm = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const categories = useSelector((state) => state.categories);
//   const categoryToEdit = categories.find(
//     (category) => category.id === parseInt(id)
//   );

//   const [name, setName] = useState(categoryToEdit ? categoryToEdit.name : "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (categoryToEdit) {
//       dispatch(updateCategory({ id: categoryToEdit.id, name }));
//     } else {
//       dispatch(addCategory({ id: Date.now(), name }));
//     }
//     navigate("/categories");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h5" gutterBottom>
//         {categoryToEdit ? "Edit Category" : "Add Category"}
//       </Typography>
//       <form onSubmit={handleSubmit} className="category-form">
//         <TextField
//           label="Category Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <Button variant="contained" color="primary" type="submit">
//           {categoryToEdit ? "Update" : "Add"}
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default HotelCategoryForm;
