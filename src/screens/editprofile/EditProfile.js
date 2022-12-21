import React, { useState } from "react";
import CPaperbutton from "./components/cPaperButton";
import CPaperbuttonselected from "./components/cPaperButtonSelected";
import {
  // Card,
  Typography,
  List,
  Drawer,
  Box,
  // ListItemText,
  ListItemIcon,
  // ListItem,
  Paper,
  Grid,
  AppBar
} from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineCloseCircle, AiFillEdit } from "react-icons/ai"
import { RiEditBoxFill } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import EditRestoProfile from '../../components/edit-resto-profile/EditRestoProfile.js'
import AddMenu from './components/addmenu/AddMenu'
import EditMenu from './components/editmenu/EditMenu'
import { Link } from 'react-router-dom'
import './editprofile.css'
import { CssBaseline } from "@material-ui/core";
const drawerWidth = 310;
const windowWidth = window.innerWidth
console.log(windowWidth)

export default function Dashboard(props) {
  const [displayed, setDisplayed] = useState(0);
  const iconList = [
    <AiFillEdit color={displayed === 0 ? "#000" : "#000"} />,
    <RiEditBoxFill color={displayed === 1 ? "#000" : "#000"} />,
    <MdOutlineRestaurantMenu color={displayed === 2 ? "#000" : "#000"} />
  ];
  const restaurant = JSON.parse(localStorage.getItem("restaurant_data"));
  const [showNav, setshowNav] = React.useState(false)
  const onClick = () => setshowNav(true)
  const onPress = () => setshowNav(false)

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Grid container display='flex' textAlign='center' marginTop={5}>
        <Typography fontFamily='Poppins'>
          <Link to="/">
            <h1 className="commonNavbar__logo mt-3">
              <span>AnyTime</span>
              <span className="commonNavbar__logoFood">Food</span>
            </h1>
          </Link>
          <div style={{ backgroundColor: "#fff", padding: "10px 60px", marginLeft: "40px", borderRadius: "8px" }}>
            <div style={{ fontSize: "12px" }}>Hello</div><div style={{ fontSize: "18px" }}>{restaurant ? restaurant["restaurant_name"] : "Login"}</div>
          </div>
        </Typography>
      </Grid>
      <List>
        {[
          "Edit Profile",
          "Edit Menu",
          "Add Items"
        ].map((text, index) => (
          <Paper
            elevation={displayed === index ? 5 : 0}
            sx={{
              height: "60px",
              margin: "10px 10px",
              borderRadius: "8px",
            }}
          >
            {displayed === index ? (
              <Grid>
                <CPaperbuttonselected
                  button
                  sx={{ height: "60px" }}
                  key={text}
                  onClick={() => {
                    if (index === 0) {
                      setDisplayed(0);
                    } else if (index === 1) {
                      setDisplayed(1);
                    } else if (index === 2) {
                      setDisplayed(2);
                    }
                  }}
                >
                  <Grid container display='flex' px={4}>
                    <ListItemIcon>{iconList[index]}</ListItemIcon>
                    <Typography fontFamily='Poppins'>{text}</Typography>
                  </Grid>
                </CPaperbuttonselected>
              </Grid>
            ) : (
              <CPaperbutton
                button
                sx={{ height: "60px" }}
                key={text}
                onClick={() => {
                  if (index === 0) {
                    setDisplayed(0);
                  } else if (index === 1) {
                    setDisplayed(1);
                  } else if (index === 2) {
                    setDisplayed(2);
                  }
                }}
              >
                <Grid container display='flex' px={4}>
                  <ListItemIcon>{iconList[index]}</ListItemIcon>
                  <Typography fontFamily='Poppins'>{text}</Typography>
                </Grid>
              </CPaperbutton>
            )}
          </Paper>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}><Toolbar sx={{ backgroundColor: "#e5e5e5" }}>
          <IconButton

            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#e5e5e5" },
          }}

        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#e5e5e5" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: "#e5e5e5", p: 3, mt: 8, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {displayed === 0 ? <EditRestoProfile /> : <div></div>}
        {displayed === 1 ? (
          <EditMenu />
        ) : (
          <div></div>
        )}
        {displayed === 2 ? (
          <AddMenu />
        ) : (
          <div></div>
        )}

      </Box>
    </Box>
  );
}
