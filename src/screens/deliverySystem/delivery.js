import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Delivery = () => {
  const data = [
    {
      time: "8:00 AM",
      items: ["Item1", "Item1", "Item1", "Item1"],
    },
    {
      time: "8:10 AM",
      items: ["Item2", "Item2", "Item2", "Item2"],
    },
    {
      time: "8:30 AM",
      items: ["Item3", "Item3", "Item3"],
    },
  ];
  const pastOrders = [
    {
      time: "8:00 AM",
      items: ["Item1", "Item1", "Item1", "Item1"],
      status: true,
    },
    {
      time: "8:10 AM",
      items: ["Item2", "Item2", "Item2", "Item2"],
      status: false,
    },
    {
      time: "8:30 AM",
      items: ["Item3", "Item3", "Item3"],
      status: true,
    },
    {
      time: "8:00 AM",
      items: ["Item1", "Item1", "Item1", "Item1"],
      status: true,
    },
    {
      time: "8:10 AM",
      items: ["Item2", "Item2", "Item2", "Item2"],
      status: false,
    },
    {
      time: "8:30 AM",
      items: ["Item3", "Item3", "Item3"],
      status: true,
    },
  ];
  return (
    <div>
      <Grid container display='flex' marginLeft={3}>
        <Grid item>
          <Grid display='flex' mx={2} marginTop={2} justifyContent='left'>
            <Typography fontSize={28} fontWeight={600} fontFamily='Poppins'>
              Pending Orders
            </Typography>
          </Grid>
          <Grid container display='flex' flexDirection='row'>
            {data.map((item) => {
              return (
                <Paper
                  sx={{
                    p: 5,
                    my: 3,
                    mx: 2,
                    backgroundColor: "#EBD671",
                    borderRadius: "12px",
                  }}
                >
                  <Grid container display='flex' flexDirection='column'>
                    <Grid item marginBottom={2}>
                      <Typography
                        fontSize={16}
                        fontWeight={600}
                        fontFamily='Poppins'
                        textAlign='left'
                      >
                        Order Time : {item.time}
                      </Typography>
                    </Grid>
                    {item.items.map((e) => {
                      return (
                        <Grid item display='flex' justifyContent='left'>
                          <li>{e}</li>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid
                    container
                    spacing={2}
                    display='flex'
                    flexDirection='row'
                  >
                    <Grid item marginTop={2}>
                      <Button variant='contained' size='small' color='success'>
                        Accept
                      </Button>
                    </Grid>
                    <Grid item marginTop={2}>
                      <Button
                        variant='outlined'
                        sx={{
                          backgroundColor: "#EA5C2B",
                          "&:hover": {
                            backgroundColor: "#AE431E",
                          },
                          color: "#fff",
                        }}
                        size='small'
                      >
                        Decline
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Grid display='flex' mx={2} marginTop={2} justifyContent='left'>
            <Typography fontSize={28} fontWeight={600} fontFamily='Poppins'>
              Past Orders
            </Typography>
          </Grid>
          <Grid container display='flex' flexDirection='row'>
            {pastOrders.map((item) => {
              // const color = item.status ? "#ACBD86" : "red";
              return item.status ? (
                <Paper
                  sx={{
                    p: 5,
                    my: 3,
                    mx: 2,
                    backgroundColor: "#CEE5D0",
                    borderRadius: "12px",
                  }}
                >
                  <Grid container display='flex' flexDirection='column'>
                    <Grid item marginBottom={2}>
                      <Typography
                        fontSize={16}
                        fontWeight={600}
                        fontFamily='Poppins'
                      >
                        Order Time : {item.time}
                      </Typography>
                    </Grid>
                    {item.items.map((e) => {
                      return (
                        <Grid item display='flex' justifyContent='left'>
                          <li>{e}</li>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid item justifyContent='left'>
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      fontFamily='Poppins'
                      textAlign='right'
                    >
                      Accepted
                    </Typography>
                  </Grid>
                </Paper>
              ) : (
                <Paper
                  sx={{
                    p: 5,
                    my: 3,
                    mx: 2,
                    backgroundColor: "#FFC286",
                    borderRadius: "12px",
                  }}
                >
                  <Grid container display='flex' flexDirection='column'>
                    <Grid item marginBottom={2}>
                      <Typography
                        fontSize={16}
                        fontWeight={600}
                        fontFamily='Poppins'
                      >
                        Order Time : {item.time}
                      </Typography>
                    </Grid>
                    {item.items.map((e) => {
                      return (
                        <Grid item display='flex' justifyContent='left'>
                          <li>{e}</li>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Grid item justifyContent='left'>
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      fontFamily='Poppins'
                      textAlign='right'
                    >
                      Declined
                    </Typography>
                  </Grid>
                </Paper>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Delivery;
