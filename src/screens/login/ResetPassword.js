import {
    Grid,
    Paper,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
  } from "@mui/material";
  import "./file.css";
  import React, { useState} from "react";
  import { Box } from "@mui/material";
  import CustomTextField from "../../components/CustomTextField";
  import Cbutton from "../../components/CustomButton";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import { RESTAURANT_MS_SERVER_URL } from "../../constants";

  
  function ResetPassword() {
    
    const Navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [token, setToken] = useState("");

    function resetPassword(e) {
      
      if(password !== repassword)
      {
        toast.error("Password and Confirm Password must be same!", {
          position: "top-center",
          autoClose: 4000,
        });
      }

      e.preventDefault();
      const changepass = {
        "password": password,
        "token": token,
      };
  
      axios
        .post(
          `${RESTAURANT_MS_SERVER_URL}/api/password_reset/confirm/`,
          changepass,
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              "user_data",
              JSON.stringify({
                password: password,
                repassword:repassword,
                token:token,
                isAuthenticated: true,
                ...response.data,
              })
            );
            localStorage.clear();
            Navigate("/login");
          }  
        })
        .catch((err) => {
          if (err.status === 401) {
            toast.error("Email Already Exists", {
                position: "top-center",
                autoClose: 4000,
              });
              return;
          }
        });
    }
  
  
    return (
      <Grid
        sx={{
          textAlign: "center",
          backgroundColor: "#FFFBE9",
        }}
        height="100vh"
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
            boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
          }}
          elevation={10}
        >
          <Grid container display="flex" flexDirection="row">
            <Grid item md={7} xs={12}>
              <Card elevation={0} sx={{ borderRadius: "16px" }}>
                <CardActionArea className="media">
                  <CardMedia
                    height="680"
                    width="100%"
                    component="img"
                    
                    image="/ill.png"
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
            <Grid  className="media2" py={5} paddingRight={8} paddingLeft={8} item md={5} xs={12}>
              <Box height={50} />
              <Typography
                display="flex"
                textAlign="left"
                color="#525252"
                fontSize={26}
                fontWeight="700"
                className="ms-4"
              >
               Reset Password
              </Typography>
              <Box height={20} />
              <form autoComplete="off" onSubmit={resetPassword}>
              <ToastContainer />
                <Box
                  my={2}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box height={16}></Box>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="*****************"
                  />

                  <Typography
                    color="#828282"
                    display="flex"
                    textAlign="left"
                    fontSize={14}
                    fontWeight="600"
                  >
                    Re-type Password
                  </Typography>
                  <CustomTextField
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                    type="password"
                    name="repassword"
                    placeholder="*****************"
                  />
                  <Typography
                    color="#828282"
                    display="flex"
                    textAlign="left"
                    fontSize={14}
                    fontWeight="600"
                  >
                    Enter Token
                  </Typography>
                  <CustomTextField
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    type="string"
                    name="token"
                    placeholder="*************"
                  />

                </Box>
                <Box my={5} />
                <Cbutton type="submit" fullWidth={true}>
                   Reset Password
                </Cbutton>
              </form>
              <Box my={5} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
  
  export default ResetPassword;
  