import {
    Grid,
    Paper,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Box } from "@mui/material";
  import CustomTextField from "../../components/CustomTextField";
  import Cbutton from "../../components/CustomButton";
  import axios from 'axios';
  import "./file.css";
  import { ToastContainer, toast } from 'react-toastify';
  import { RESTAURANT_MS_SERVER_URL } from "../../constants";
  
  
  function ForgotPassword(props) {
  
    const [email, setEmail] = useState('');
  
  
    function sendEmail(e) {
      e.preventDefault();
      const emailData = {
        "email": email,
      };
  
      axios
        .post(
          `${RESTAURANT_MS_SERVER_URL}/api/password_reset/`,
          emailData,
          { headers: { "Content-Type": "application/json" } },
  
        )
        .then((response) => {
          console.log(response)
          console.log(emailData)
          if (response.status === 200) {
            window.location.href = '/getToken'
          }
        })
        .catch((err) => {
          if (err.status === 404) {
            toast.error("Email Not Found", {
              position: "top-center",
              autoClose: 4000,
            });
          } 
          console.log(err);
        });
    }
  
    return (
      <Grid
        sx={{
          backgroundColor: "#FFFBE9",
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
            boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
          }}
          elevation={10}
        >
          <Grid container display='flex' flexDirection='row'>
            <Grid py={2} paddingRight={6} paddingLeft={6} item md={5} xs={12}>
              <Typography
                display='flex'
                textAlign='left'
                color='#525252'
                fontSize={24}
                fontWeight='700'
              >
                Reset Password
              </Typography>
              <Box height={10} />
  
              <form onSubmit={sendEmail} autoComplete='off'>
              <ToastContainer />
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
                    Enter Your Email
                  </Typography>
                  <CustomTextField onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='opensoft@gmail.com' />
  
                </Box>
                <Cbutton type="submit" fullWidth={true}>Reset Password</Cbutton>
              </form>
            
            </Grid>
            <Grid item md={7} xs={12}>
              <Card elevation={0} sx={{ borderRadius: "16px" }}>
                <CardActionArea className="media">
                  <CardMedia
                    height='725'
                    component='img'
                    image='/il.png'
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
  
  export default ForgotPassword;
  