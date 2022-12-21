import {
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Button,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomTextField from "../../components/CustomTextField";
import Cbutton from "../../components/CustomButton";
import { Link } from "react-router-dom";
import Gbutton from "../../components/GoogleButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RESTAURANT_MS_SERVER_URL } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as EmailValidator from "email-validator";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import "./file.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const Navigate = useNavigate();
  function userLogin(e) {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };

    if (EmailValidator.validate(userLogin.email)) {
      axios
        .post(
          `${RESTAURANT_MS_SERVER_URL}/login`,
          userLogin,
          { data: JSON.stringify(userLogin) },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              "restaurant_data",
              JSON.stringify({
                email: email,
                password: password,
                ...response.data,
              })
            );
            toast.success("Login successful", {
              position: "top-center",
              autoClose: 3000,
            });
            setTimeout(() => {
              Navigate("/", { replace: true });
            }, 3000);
            // Navigate("/");
          }
        })
        .catch((err) => {
          if (err.status === 404) {
            // alert("Restaurant not found");
            toast.error("Restaurant Not Found", {
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
    } else {
      setMsg("Invalid Email, Please enter a correct email");
      setOpen(true);
    }
  }

  return (
    <Grid
      sx={{
        textAlign: "center",
        backgroundColor: "#FFFBE9",
      }}
      height='100vh'
      container
    >
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth
        // sx={{ width: 800, justifyContent: "center", alignContent: "center" }}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
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
        <Grid container display='flex' flexDirection='row'>
          <Grid item md={7} xs={12}>
            <Card elevation={0} sx={{ borderRadius: "16px" }}>
              <CardActionArea className="media">
                <CardMedia
                  height='680'
                  width='100%'
                  component='img'
                  image='/ill.png'
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
          <Grid py={5} paddingRight={8} paddingLeft={8} item md={5} xs={12}>
            <Box height={50} />
            <Typography
              display='flex'
              textAlign='left'
              color='#525252'
              fontSize={26}
              fontWeight='700'
            >
              Login to your Account
            </Typography>
            <Box height={20} />
            <Gbutton fullWidth={true}>
              <img alt='Continue' src='./g.png' width={24}></img>{" "}
              <Box width={8} /> Continue with Google
            </Gbutton>
            <Box height={35} />
            <Typography color='#828282' fontSize={14} fontWeight='700'>
              or sign in with email
            </Typography>
            <Box height={10} />
            <form autoComplete='off' onSubmit={userLogin}>
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
                  Email
                </Typography>
                <CustomTextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='opensoft@gmail.com'
                  type='email'
                  name='email'
                />
                <Box height={16}></Box>
                <Typography
                  color='#828282'
                  display='flex'
                  textAlign='left'
                  fontSize={14}
                  fontWeight='600'
                >
                  Password
                </Typography>
                <CustomTextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  name='password'
                  placeholder='*****************'
                />
              </Box>
              <Box my={5} />
              <Cbutton type='submit' fullWidth={true}>
                <Link to='/'>
                  <span style={{ color: "#FFFFFF" }}>Login</span>
                </Link>
              </Cbutton>
            </form>
            <ToastContainer />
            <Box my={5} />
            <Box display='flex' flexDirection='row' justifyContent='center'>
              <Typography color='#828282' fontSize={18} fontWeight='500'>
                Not Registered Yet?
              </Typography>
              <Box mx={0.25} />
              <Link style={{ textDecoration: "none" }} to='/signup'>
                <Typography color='#7F265B' fontSize={18} fontWeight='600'>
                  Create an account
                </Typography>
              </Link>
            </Box>
            <Link style={{ textDecoration: "none" }} to="/forgotPassword">
                <Typography color="#7F265B" fontSize={18} fontWeight="600">
                  Forgot Password ?
                </Typography>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
