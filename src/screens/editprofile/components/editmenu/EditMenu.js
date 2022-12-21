import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Paper,
    Typography,
    Select,
    MenuItem
} from "@mui/material";
import { Box } from "@mui/material";
import CustomTextField from "../../../../components/CustomTextField";
import Cbutton from "../../../../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



export default function EditMenu() {

    const restaurantData = JSON.parse(localStorage.getItem("restaurant_data"));
    const restaurant_id = restaurantData.restaurant_id;
    const email = restaurantData.email;
    const password = restaurantData.password;
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItemId,setSelectedItemId] = useState();

    useEffect(() => {
        axios
            .post(`https://rk-os-restaurant-menu-ms.herokuapp.com/item_list/${restaurant_id}`)
            .then((response) => {
                setMenuItems(response.data["items"]);
            })
            .catch((err) => {
                if (err.status === 404) {
                    // alert("Restaurant not found");
                    toast.error("Restaurant not found", {
                        position: "top-center",
                        autoClose: 3000,
                      });
                }
                else if (err.status === 401) {
                    // alert("Invalid password");
                    toast.error("Invalid Password", {
                        position: "top-center",
                        autoClose: 3000,
                      });
                }
            });
    }, [restaurant_id])

    const [itemName, setItem] = useState('');
    const [itemPrice, setPrice] = useState('');
    const [itemImage, setImage] = useState('');
    const [itemType, setType] = useState('');

    const Navigate = useNavigate();

    function onEditMenu(e) {
        e.preventDefault();
        const editMenu = {
            item_name: itemName,
            item_price: itemPrice,
            item_image: itemImage,
            item_type: itemType,
            email: email,
            password: password
        };

        axios
            .put(
                `https://rk-os-restaurant-menu-ms.herokuapp.com/menu_item/${selectedItemId}`,
                { data: JSON.stringify(editMenu) },
                { headers: { "Content-Type": "application/json" } },

            )
            .then((response) => {
                if(response.status === 200) {
                    // alert("Menu Item Updated Successfully");
                    // window.location.href="/";
                    toast.success("Order placed successfully", {
                        position: "top-center",
                        autoClose: 4000,
                      });setTimeout(() => {
                        Navigate("/", { replace: true });
                      }, 3000);
                }
            })
            .catch((err) => {
                if (err.status === 404) {
                    // alert("Item not found");
                    toast.error("Items Not Found", {
                        position: "top-center",
                        autoClose: 3000,
                      });
                } else if (err.status === 401) {
                    // alert("Invalid password");
                    toast.error("Invalid Password", {
                        position: "top-center",
                        autoClose: 3000,
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
                    <Grid container display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
                        <Grid py={5} item  >
                            <Box height={50} />
                            <Typography
                                display='flex'
                                textAlign='center'
                                color='#525252'
                                fontSize={40}
                                fontWeight='700'
                            >
                                Edit Menu
                            </Typography>
                            <Box height={20} />
                            <Box display='flex' flexDirection='row' style={{ width: '150px', height: '100px' }}>
                                <img src="https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg" alt="item_img" />
                            </Box>
                            <Box height={35} />
                            <Typography
                                display='flex'
                                textAlign='center'
                                color='#000000'
                                fontSize={28}
                                fontWeight='500'
                            >
                                Edit Items
                            </Typography>
                            <Box height={10} />
                            <form autoComplete='off' onSubmit={onEditMenu}>
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
                                        Select Item
                                    </Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Item"

                                    >
                                        {menuItems.map(menuItem => <MenuItem value={menuItem.itemName} onClick={()=>setSelectedItemId(menuItem.item_id)}>{menuItem.itemName}</MenuItem>)}
                                    </Select>
                                    <Box height={16}></Box>
                                    <Typography
                                        color='#828282'
                                        display='flex'
                                        textAlign='left'
                                        fontSize={14}
                                        fontWeight='600'
                                    >
                                        Item Name
                                    </Typography>
                                    <CustomTextField style={{ width: "60vw" }}
                                        value={itemName}
                                        onChange={(e) => setItem(e.target.value)}
                                        type="text" name="itemName" />
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
                                        onChange={e => setPrice(e.target.value)}
                                        type='number'
                                        name="itemPrice"
                                    />
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
                                    <input type="file" placeholder="Upload Image" value={itemImage} onChange={(e) => setImage(e.target.value)} accept="image/png, image/jpeg"/>
                                    <Box height={16}></Box>
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
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Item Type"
                                        value={itemType}
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <MenuItem value={true}>Veg</MenuItem>
                                        <MenuItem value={false}>Non-Veg</MenuItem>
                                    </Select>
                                    <Box height={16}></Box>
                                </Box>
                                <Box my={5} />
                                <Box display='flex' flexDirection='row' justifyContent='center'>
                                    <Link style={{ textDecoration: 'none' }} to='/'><Cbutton style={{ width: "120px" }} type="submit" fullWidth={true} >Cancel</Cbutton></Link>
                                    <Box mx={2} />
                                    <Cbutton style={{ width: "200px" }} type="submit" fullWidth={true} onClick={onEditMenu} >Save Changes</Cbutton>
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