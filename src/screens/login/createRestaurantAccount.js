import {
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import Cbutton from "../../components/CustomButton";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { RESTAURANT_MS_SERVER_URL } from "../../constants";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as EmailValidator from "email-validator";
import "./file.css";
function CreateRestaurantAccount() {
  const [ovalue, setoValue] = useState("");
  const [cvalue, setcValue] = useState("");
  const Navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    email: "",
    restaurantName: "",
    onwerContactNumber: "",
    completeAddress: "",
    password: "",
    confirmPassword: "",
    openingTime: "",
    closingTime: "",
  });

  const onChange = (item) =>
    setFormData({ ...formData, [item.target.name]: item.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.password === formData.confirmPassword &&
      EmailValidator.validate(formData.email)
    ) {
      const userData = {
        email: formData.email,
        restaurant_name: formData.restaurantName,
        address: formData.completeAddress,
        contact_number: formData.onwerContactNumber,
        password: formData.password,
        opening_time: `${formData.openingTime}`,
        closing_time: `${formData.closingTime}`,
      };
      console.log(userData);
      axios
        .post(`${RESTAURANT_MS_SERVER_URL}/signup`, userData)
        .then((response) => {
          console.log(response.status);
          if (response.status === 200)
            toast.success("Your Account has been created", {
              position: "top-center",
              autoClose: 4000,
            });
          setTimeout(() => {
            Navigate("/", { replace: true });
          }, 4000);
        })
        .catch((err) => {
          if (err.status === 404) {
            // alert("User not found");
            toast.error("User not found", {
              position: "top-center",
              autoClose: 4000,
            });
          } else if (err.status === 401) {
            // alert("Invalid password");
            toast.error("Invalid password", {
              position: "top-center",
              autoClose: 4000,
            });
          } else if (err.status === 400) {
            toast.error("Email Already Exists", {
              position: "top-center",
              autoClose: 4000,
            });
          }
        });
    } else if (EmailValidator.validate(formData.email) === false) {
      console.log(formData.email);
      console.log("invalid email");
      setOpen(true);
      setMsg("Invalid Email, Please enter correct email");
    } else if (formData.password !== formData.confirmPassword) {
      console.log("password did not match");
      setMsg("Password did not match");
      setOpen(true);
    }
  };

  return (
    <Grid
      sx={{
        backgroundColor: "#FFFBE9",
      }}
      height="100vh"
      container
    >
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth
        // sx={{ width: 800, justifyContent: "center", alignContent: "center" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
          boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
        }}
        elevation={10}
      >
        <Grid container display="flex" flexDirection="row">
          <Grid py={2} paddingRight={6} paddingLeft={6} item md={5} xs={12}>
            <Typography
              display="flex"
              textAlign="left"
              color="#525252"
              fontSize={24}
              fontWeight="700"
            >
              Create Restaurant Account
            </Typography>
            <Box height={10} />

            <form autoComplete="off" onSubmit={handleSubmit}>
              <Box
                my={2}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Email
                </Typography>
                <CustomTextField
                  onChange={onChange}
                  name="email"
                  type="text"
                  placeholder="opensoft@gmail.com"
                />
                <Box height={5}></Box>
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Restaurant Name
                </Typography>
                <CustomTextField
                  onChange={onChange}
                  name="restaurantName"
                  type="text"
                  placeholder="restaurent name"
                />
                <Box height={5}></Box>
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Owners Contact Number
                </Typography>
                <CustomTextField
                  onChange={onChange}
                  name="onwerContactNumber"
                  type="number"
                  placeholder="9876543210"
                />
                <Box height={5}></Box>
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Complete Restaurant Address
                </Typography>
                <CustomTextField
                  onChange={onChange}
                  name="completeAddress"
                  type="text"
                  placeholder="kharagpur"
                />
                <Box height={5}></Box>
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Password
                </Typography>
                <CustomTextField
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="*****************"
                />
                <Box height={5}></Box>
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Confirm Password
                </Typography>
                <CustomTextField
                  onChange={onChange}
                  name="confirmPassword"
                  type="password"
                  placeholder="*****************"
                />
                <Box height={5}></Box>
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Opening Time
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopTimePicker
                    label="For desktop"
                    value={ovalue}
                    onChange={(newValue) => {
                      setoValue(newValue);
                      setFormData({
                        ...formData,
                        openingTime: new Date(newValue).toISOString(),
                      });
                      console.log(new Date(newValue).toISOString());
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                {/* <CustomTextField
                  onChange={onChange}
                  name='openingTime'
                  type='text'
                  placeholder='08:00'
                /> */}
                <Box height={5}></Box>
                <Typography
                  color="#828282"
                  display="flex"
                  textAlign="left"
                  fontSize={14}
                  fontWeight="600"
                >
                  Closing Time
                </Typography>
                {/* <CustomTextField
                  onChange={onChange}
                  name="closingTime"
                  type="text"
                  placeholder="22:00"
                /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopTimePicker
                    label="For desktop"
                    value={cvalue}
                    onChange={(newValue) => {
                      setcValue(newValue);
                      setFormData({
                        ...formData,
                        closingTime: new Date(newValue).toISOString(),
                      });
                      console.log(new Date(newValue).toISOString());
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Box height={15} />
              <Cbutton fullWidth={true} onClick={handleSubmit}>
                Sign Up
              </Cbutton>
            </form>
            <ToastContainer />
            <Box height={15} />
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Typography color="#828282" fontSize={14} fontWeight="500">
                Already Registered?
              </Typography>
              <Box mx={0.25} />

              <Typography color="#7F265B" fontSize={14} fontWeight="600">
                <Link to="/login">Login</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={7} xs={12}>
            <Card elevation={0} sx={{ borderRadius: "16px" }}>
              <CardActionArea className="media">
                <CardMedia
                  height="750"
                  component="img"
                  image="/illus.png"
                ></CardMedia>
                <CardContent
                  sx={{
                    p: 0,
                    position: "absolute",
                    top: 0,
                  }}
                ></CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default CreateRestaurantAccount;
