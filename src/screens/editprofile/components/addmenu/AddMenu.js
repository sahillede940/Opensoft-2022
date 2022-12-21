import React, { useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/material";
import CustomTextField from "../../../../components/CustomTextField";
import Cbutton from "../../../../components/CustomButton";
import { Link } from "react-router-dom";
import { RESTAURANT_MENU_MS_SERVER_URL } from "../../../../constants.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddMenu() {
  const restaurantData = JSON.parse(localStorage.getItem("restaurant_data"));
  const restaurant_id = restaurantData.restaurant_id;

  const [itemName, setItem] = useState("");
  const [itemPrice, setPrice] = useState("");
  const [itemImage, setImage] = useState(null);
  const [itemType, setType] = useState("");
  // const [{ alt, src }, setImg] = useState({
  //   src: placeholder,
  //   alt: "Upload an Image",
  // });

  // const handleImg = (e) => {
  //   if (e.target.files[0]) {
  //     setImg({
  //       src: URL.createObjectURL(e.target.files[0]),
  //       alt: e.target.files[0].name,
  //     });
  //   }
  // };
  function onAddMenu(e) {
    e.preventDefault();
    const addMenu = {
      item_name: itemName,
      item_price: itemPrice,
      item_image: itemImage,
      email: restaurantData.email,
      password: restaurantData.password,
      item_type: itemType,
    };
    console.log(addMenu);
    axios
      .post(
        `${RESTAURANT_MENU_MS_SERVER_URL}/item_list/${restaurant_id}`,
        addMenu,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
        toast.success("Items added successfully", {
          position: "top-center",
          autoClose: 4000,
        });
      })
      .catch((err) => {
        if (err.status === 404) {
          // alert("Restaurant not found");
          toast.error("Restaurant not found", {
            position: "top-center",
            autoClose: 4000,
          });
        } else if (err.status === 401) {
          // alert("Invalid password");
          toast.error("Invalid Password", {
            position: "top-center",
            autoClose: 4000,
          });
        }
      });
  }

  return (
    <div>
      <Grid
        sx={{
          textAlign: "center",
          backgroundColor: "#e5e5e5",
        }}
        height='100vh'
        container
      >
        <Paper
          sx={{
            m: "auto",
            p: "8px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
            width: "75vw",
            //   boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.25)",
            //   borderRadius: "20px",
          }}
          elevation={10}
        >
          <Grid
            container
            display='flex'
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid py={5} item>
              <Box height={50} />
              <Typography
                display='flex'
                textAlign='center'
                color='#525252'
                fontSize={40}
                fontWeight='700'
              >
                Add Menu
              </Typography>
              <Box p={2} display='flex' flexDirection='row'>
                {itemImage !== null ? (
                  <img
                    width={200}
                    height={200}
                    src={URL.createObjectURL(itemImage)}
                  />
                ) : (
                  <div></div>
                )}
              </Box>
              <Box height={15}></Box>
              <Typography
                display='flex'
                textAlign='center'
                color='#000000'
                fontSize={28}
                fontWeight='500'
              >
                Add Items
              </Typography>
              <Box height={10} />
              <form autoComplete='off' onSubmit={onAddMenu}>
                <Box
                  my={2}
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                >
                  <Typography
                    color='#828282'
                    display='flex'
                    textAlign='left'
                    fontSize={14}
                    fontWeight='600'
                  >
                    Item Name
                  </Typography>
                  <CustomTextField
                    style={{ width: "60vw" }}
                    value={itemName}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder='Burger'
                    type='text'
                    name='itemName'
                  />
                  <Box height={16}></Box>
                  <Typography
                    color='#828282'
                    display='flex'
                    textAlign='left'
                    fontSize={14}
                    fontWeight='600'
                  >
                    Item Cost (in rupees)
                  </Typography>
                  <CustomTextField
                    value={itemPrice}
                    onChange={(e) => setPrice(e.target.value)}
                    type='number'
                    name='itemPrice'
                    placeholder='120'
                  />
                </Box>
                <Box height={16}></Box>
                <Typography
                  color='#828282'
                  display='flex'
                  textAlign='left'
                  fontSize={14}
                  fontWeight='600'
                >
                  Item Image
                </Typography>
                <input
                  type='file'
                  placeholder='Upload Image'
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    // handleImg(e);
                  }}
                  accept='image/png, image/jpeg'
                />
                <Box my={5} />
                <Typography
                  color='#828282'
                  display='flex'
                  textAlign='left'
                  fontSize={14}
                  fontWeight='600'
                >
                  Item Type
                </Typography>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Item Type'
                  value={itemType}
                  onChange={(e) => setType(e.target.value)}
                  style={{ width: "150px" }}
                >
                  <MenuItem value={true}>Veg</MenuItem>
                  <MenuItem value={false}>Non-Veg</MenuItem>
                </Select>
                <Box height={16}></Box>
                <Box display='flex' flexDirection='row' justifyContent='center'>
                  <Link style={{ textDecoration: "none" }} to='/'>
                    <Cbutton
                      style={{ width: "120px" }}
                      type='submit'
                      fullWidth={true}
                    >
                      Cancel
                    </Cbutton>
                  </Link>
                  <Box mx={2} />
                  <Cbutton
                    style={{ width: "120px" }}
                    type='submit'
                    fullWidth={true}
                    onClick={onAddMenu}
                  >
                    Save
                  </Cbutton>
                </Box>
              </form>
              <ToastContainer />
              <Box my={5} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
