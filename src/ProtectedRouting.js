import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const restaurantData = JSON.parse(localStorage.getItem("restaurant_data"));
    if (restaurantData && restaurantData.restaurant_id) {
        return <Component {...restOfProps} />;
    }
    localStorage.removeItem("restaurant_data");
    return <Navigate to="/login" />;
}

export default ProtectedRoute;