import React from "react";
import Restaurant from "../../components/header-nonLoggedInUser/Restaurant";
import publicHomeImg1 from "../../assets/images/publicHomeImg1.png";
import publicHomeImg2 from "../../assets/images/publicHomeImg2.png";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./publicHomeScreen.css";

function PublicHomeScreen() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Restaurant />
      <div>
        <div className="container publicHomeScreen my-3">
          <div className="row d-flex justify-content-between">
            <div className="col-5">
              <img src={publicHomeImg1} alt="" className="w-100" />
              <p className="publicHomeScreen__paragraph pt-1">
                SignUp to Deliver
              </p>
            </div>
            <div className="col-5">
              <img src={publicHomeImg2} alt="" className="w-100" />{" "}
              <p className="publicHomeScreen__paragraph pt-1">
                <Link to="/login">Add Restaurant</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="publicScreenBanner d-flex flex-column justify-content-center align-items-center">
          <h1>Are you ready to order with the best deals?</h1>
          <Link to="/login">
          <button className="publicScreenBanner__button mt-4">
            Proceed To Order <ChevronRight />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PublicHomeScreen;
