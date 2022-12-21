import React from "react";
import "./style.css";


const Restaurant = () => {
  return (
    <>
     
      <div className=" back-image d-flex flex-column align-items-center justify-content-center ">
        <h2 className="starving">Are you starving</h2>
        <h3 className="discover ">
          Discover the best Food & Drinks in Kharagpur
        </h3>
        <div className="white-rectangle d-flex flex-column align-items-center align-items-md-start justify-content-center">
          <div className="white-rectangle__top d-flex  flex-column flex-md-row mt-2">
            <button className="delivery-rectangle">
              <i className="fa fa-motorcycle bike-icon"></i>
              <h7 className="delivery">Delivery</h7>
            </button>
            <button className="delivery-rectangle mt-2 mt-md-0">
              <i className="fa fa-shopping-bag bag-icon"></i>
              <h7 className="pick-up">Pickup</h7>
            </button>
          </div>
          <div className="d-flex mt-3 mt-md-4 pt-2">
            <div className="delivery-locate-rectangle d-flex flex-column flex-md-row">
              <div className="d-flex ">
                <div className="location-icon">
                <i className="fa fa-map-marker locate-icon d-flex mt-2"  ></i>
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div>
                    <input
                      className="enter-delivery"
                      type="text"
                      placeholder="Enter your delivery location"
                    />
                  </div>

                  <input
                    className="locate mt-2 mt-md-0"
                    type="text"
                    placeholder="Locate Me"
                  />
                </div>
              </div>

              <button className="find-food-rectangle d-flex align-items-center justify-content-center mt-4 mt-md-0">
                <i className="fa fa-search search-icon"></i>
                <p className="find-food">Find Food</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Restaurant;
