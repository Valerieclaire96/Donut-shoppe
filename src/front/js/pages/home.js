import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="home">
		<div className="innerContainer">
		<div className="headingContainer">
		<h1>💝   Darla's Donuts   💝</h1>
		</div>
      <div className="subContainer">
        
        <h2>Spring Time Strawberry</h2>
		<img className="homeImg" src="https://www.fifteenspatulas.com/wp-content/uploads/2014/02/StrawberryFreshGlazedDonutsFifteenSpatulas.jpg"/>
        <p>
          A delicous cake donut with strawberries baked right in and topped with
          a strawberry glaze.
        </p>
        <i>for a limited time only</i>
      </div>
      <div className="subContainer">
		<div className="preorder">
        <h1>Pre-order Now</h1>
		<p>Date</p>
        <button className="btn btn-info"><Link to="/order"></Link>Order Now</button>
		</div>
      </div>
        <h2 className="headingContainer">Customer Reviews</h2>
        <div className="reviewContainer">
          <h4>Lorem ipsum <br/> ⭐⭐⭐⭐⭐</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
        <div className="reviewContainer">
          <h4>Lorem ipsum <br/> ⭐⭐⭐⭐⭐</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
        <div className="reviewContainer">
          <h4>Lorem ipsum <br/> ⭐⭐⭐⭐⭐</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
        <div className="reviewContainer">
          <h4>Lorem ipsum <br/> ⭐⭐⭐⭐⭐</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
        <div className="reviewContainer">
          <h4>Lorem ipsum <br/> ⭐⭐⭐⭐⭐</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
        <div className="reviewContainer">
          <h4>Lorem ipsum <br/> ⭐⭐⭐⭐⭐</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
