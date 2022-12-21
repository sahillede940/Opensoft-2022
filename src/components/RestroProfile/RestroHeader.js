import React from 'react'
import Classes from "./RestroHeader.module.css"
import food_pic from "../../assets/images/food_pic.png"

export default function RestroHeader({restaurant_data}) {

  const restaurant = JSON.parse(localStorage.getItem("restaurant_data"));

  return (
    <div className={Classes.container}>
      <div className={Classes.header}>
      <img src={food_pic} alt="" />
          <div className={Classes.restro_details}>
              <div className={Classes.restro_name}>
              <h2>{restaurant["restaurant_name"]}</h2> 
              <p>Fast Food, Beverages </p>
              <p>{restaurant["address"]}</p>
              </div>
              <div className={Classes.grid}>
                <div>
                  <h4>4.8 ★</h4>
                  <p>500+ ratings</p>
                </div>
                <div>
                  <h4>29 min</h4>
                  <p style={{wordWrap: "break-word"}}>Estimated delivery time</p>
                </div>              
              </div>
          </div>
      </div>
      <div className={Classes.offer}>
        <h2>OFFER</h2>
        <p><b>%</b> Get 50% off | use code SPRINGFEST50</p>
        <p><b>%</b> Get 40% off | use code KSHITIJ40</p>
      </div>
    </div>
  )
}
