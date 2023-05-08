import React, { useContext } from "react";
import { useEffect, useState } from "react";
import TimePicker from "react-time-picker";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export default function Order() {
  let categories = ["Donuts", "Bagel", "Pastry", "Muffin", "Coffee"];
  const { store, actions } = useContext(Context);
  const [donuts, setDonuts] = useState([]);
  const [bagels, setBagels] = useState([]);
  const [pastries, setPastries] = useState([]);
  const [muffins, setMuffins] = useState([]);
  const [coffees, setCoffees] = useState([]);
  console.log(coffees);
  const [DonutFlavor, setDonutFlavor] = useState(false);
  const [bagelFlavor, setbagelFlavor] = useState(false);
  const [pastryFlavor, setpastryFlavor] = useState(false);
  const [muffinFlavor, setmuffinFlavor] = useState(false);
  const [coffeeFlavor, setcoffeeFlavor] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFlavor, setSelectedFlavor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState();
  console.log(selectedQuantity, "QUANTITY")
  const [value, onChange] = useState("10:00");

  const handleCheckout = (e) => {
    e.preventDefault();
    const opts = {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        cart: store.cart
      })
    }
    
    fetch(process.env.BACKEND_URL + "/api/stock/order", opts)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
  }
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/donuts")
      .then((res) => res.json())
      .then((donuts) => {
        setDonuts(donuts);
      })
      .catch((err) => console.log(err));
    fetch(process.env.BACKEND_URL + "/api/bagels")
      .then((res) => res.json())
      .then((bagels) => {
        setBagels(bagels);
      })
      .catch((err) => console.log(err));
    fetch(process.env.BACKEND_URL + "/api/muffins")
      .then((res) => res.json())
      .then((muffins) => {
        setMuffins(muffins);
      })
      .catch((err) => console.log(err));
    fetch(process.env.BACKEND_URL + "/api/pasteries")
      .then((res) => res.json())
      .then((pastries) => {
        setPastries(pastries);
      })
      .catch((err) => console.log(err));
    fetch(process.env.BACKEND_URL + "/api/coffees")
      .then((res) => res.json())
      .then((coffees) => {
        setCoffees(coffees);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="orderContainer">
      <form>
        <h2>Order Now</h2>
        <div className="selections-container">
          <label>Pick up Date:</label>
          <br />
          <input className="pickup date" type="date" />
          <TimePicker className="pickup" onChange={onChange} value={value} />
          <br />
          <label>Baked Good:</label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>

          <label>Flavor:</label>
          <select
            onChange={(e) => setSelectedFlavor(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option></option>
            {selectedCategory == categories[0]
              ? donuts.map((donut, index) => (
                  <option value={donut.flavor} key={donut}>
                    {donut.flavor}
                  </option>
                ))
              : null}

            {selectedCategory == categories[1]
              ? bagels.map((bagel, index) => (
                  <option value={bagel.flavor} key={bagel}>
                    {bagel.flavor}
                  </option>
                ))
              : null}

            {selectedCategory == categories[2]
              ? pastries.map((pastry, index) => (
                  <option value={pastry.value} key={pastry}>
                    {pastry.flavor}
                  </option>
                ))
              : null}
            {selectedCategory == categories[3]
              ? muffins.map((muffin, index) => (
                  <option value={muffin.flavor} key={muffin}>
                    {muffin.flavor}
                  </option>
                ))
              : null}
            {selectedCategory == categories[4]
              ? coffees.map((coffee, index) => (
                  <option value={coffee.flavor} key={coffee}>
                    {coffee.flavor}
                  </option>
                ))
              : null}
          </select>
          <label className="quantity">Quantity:</label>
          <br />
          <input type="number" value={selectedQuantity} onChange={(e) => setSelectedQuantity(e.target.value)} ></input>
          <br />
          <button
            className="btn btn-info"
            onClick={(e) => {
              e.preventDefault();
              actions.addToOrder({"treat":selectedCategory.toLowerCase(), "quantity":selectedQuantity, "flavor":selectedFlavor.toLowerCase()});
              console.log("FLAVOR", selectedFlavor);
            }}
          >
            Add to Order
          </button>
          {console.log(store.cart, "CART")}
          <label className="total">Total:</label>

          <button className="btn btn-info" type="submit" onClick={(e) => handleCheckout(e)}>
            <Link to="/checkout">Check Out</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
