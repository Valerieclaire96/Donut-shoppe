import React, {useContext} from "react";
import { useEffect, useState } from "react";
import TimePicker from "react-time-picker";
import { Context } from "../store/appContext";



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
  const [value, onChange] = useState("10:00");
  

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
      .catch((err) => console.log(err))
   fetch(process.env.BACKEND_URL + "/api/muffins")
      .then((res) => res.json())
      .then((muffins) => {
        setMuffins(muffins);
      })
      .catch((err) => console.log(err))
fetch(process.env.BACKEND_URL + "/api/pasteries")
      .then((res) => res.json())
      .then((muffins) => {
        setMuffins(muffins);
      })
      .catch((err) => console.log(err));
      fetch(process.env.BACKEND_URL + "/api/coffees")
      .then((res) => res.json())
      .then((coffees) => {
        setCoffees(coffees);
      })
      .catch((err) => console.log(err));
  },[]);


  return (
    <div className="orderContainer">
      <form>
        <h2>Order Now</h2>
        <div className="selections-container">
        <label>Pick up Date:</label>
        <br/>
        <input className="pickup"type="date" />
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
        <br/>
        <input type="number"></input>
        <br />
        <button className="btn btn-info" onClick={(e) => {e.preventDefault(); actions.addToOrder(selectedFlavor); console.log("FLAVOR", selectedFlavor)}}>Add to Order</button>
        {console.log(store.cart, "CART")}
        <label className="total">Total:</label>

        <button className="btn btn-info" type="submit">Check Out</button>
        </div>
      </form>
    </div>
  );
}
