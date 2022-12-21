import React from "react";
import RestroProfileCard from "./RestroProfileCard";
import "./RestroProfileCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RestroHeader from "./RestroHeader";
import StatusCard from "./StatusCard";
import EditCard from "./EditCard";
import "./RestroProfileCard.css";
import { RESTAURANT_MENU_MS_SERVER_URL } from "../../constants";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function RestroProfilePage() {
  const restaurantData = JSON.parse(localStorage.getItem("restaurant_data"));
  const restaurant_id = restaurantData.restaurant_id;
  const [restroProfileCards, setRestroProfileCards] = useState([]);
  const [restaurantFound, setrestaurantFound] = useState(true);
  useEffect(() => {
    async function fetchRestroProfileCards() {
      axios
        .get(`${RESTAURANT_MENU_MS_SERVER_URL}/item_list/${restaurant_id}`)
        .then((response) => {
          setRestroProfileCards(response.data);
        })
        .catch((err) => {
          if (err.status === 404) {
            setRestroProfileCards([]);
            setrestaurantFound(false);
          } else if (err.status === 401) {
          // alert("Invalid password");
          toast.error("Invalid Password", {
            position: "top-center",
            autoClose: 4000,
          });
          }
        });
    }
    fetchRestroProfileCards();
  }, [restaurant_id]);

  return (
    <div>
      <RestroHeader />
      <div className="cardbox">
        <StatusCard />
        <EditCard />
      </div>
      <div>
        <h1 className="restroHeading">Your Menu</h1>
        <div className="restroMenuCard-row">
          <div className="menuCard-row row">
            {restaurantFound ? (
              restroProfileCards.map((restroCard) => {
                return (
                  <RestroProfileCard
                    title={restroCard.item_name}
                    desc={restroCard.item_name}
                    img={restroCard.item_image}
                  />
                );
              })
            ) : (
              <h1>Menu Not Found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
