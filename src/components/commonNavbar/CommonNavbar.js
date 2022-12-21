import { KeyboardArrowDown, Person } from "@mui/icons-material";
import React from "react";
import "./CommonNavbar.css";
import { Link, Navigate } from "react-router-dom";

function CommonNavbar() {
  const restaurant = JSON.parse(localStorage.getItem("restaurant_data"));
  return (
    <div className="container-fluid commonNavbar">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between">
        <Link to="/">
          <h1 className="commonNavbar__logo">
            <span>Anytime</span>
            <span className="commonNavbar__logoFood">Food</span>
          </h1>
        </Link>

        <div className="commonNavbar__dropdownButton ms-lg-3">
          <Person />{" "}
          <Link
            style={
              restaurant
                ? {
                    borderRight: "2px solid #000",
                    paddingRight: "10px",
                    textOverflow: "ellipsis",
                    width: "70px",
                    display: "block",
                    overflowX: "hidden",
                  }
                : {}
            }
            to={restaurant ? "/" : "/login"}
          >
            {restaurant ? restaurant["restaurant_name"] : "Login"}
          </Link>{" "}
          {restaurant && (
            <KeyboardArrowDown
              onClick={() => {
                if (restaurant) {
                  var dropdownmenu = document.getElementById("dropdown-menu");
                  dropdownmenu.classList.toggle("d-none");
                }
              }}
            />
          )}
          {restaurant && (
            <div className="dropdown-menu-links d-none" id="dropdown-menu">
              <Link className="dropdown-item" to="/editrestoprofile">
                Edit Profile
              </Link>
              <Link
                className="dropdown-item"
                onClick={() => {
                  localStorage.clear();
                }}
                to="/login"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommonNavbar;
