import React from "react";
import "./RestaurantAbout.css";

const RestaurantAbout = () => {
  return (
    <div className="restaurant-about-container">
      <h2 className="page-heading">About Foodporter</h2>
      <p className="about-description">
        <strong>Foodporter</strong> is an online food delivery and restaurant management platform designed to simplify and enhance the food ordering experience. As a restaurant partner, you can manage orders, update your menu, monitor earnings, and connect with customers – all in one place.
      </p>

      <div className="about-section">
        <h3>Why Partner with Us?</h3>
        <ul>
          <li>Real-time order management</li>
          <li>Customizable restaurant menu</li>
          <li>Detailed sales and performance reports</li>
          <li>Dedicated support team</li>
          <li>Increased visibility and customer reach</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          To empower restaurants and food vendors by providing them with smart digital tools and access to a wider audience, ensuring convenience and growth.
        </p>
      </div>
    </div>
  );
};

export default RestaurantAbout;
