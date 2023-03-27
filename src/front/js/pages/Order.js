import React from "react";
import { useEffect, useState } from "react";

export default function Order() {
  let categories = ["Donuts", "Bagel", "Pastry", "Muffin", "Coffee"];
  const [donuts, setDonuts] = useState([]);
  const [bagels, setBagels] = useState([]);
  const [pastries, setPastries] = useState([]);
  const [muffins, setMuffins] = useState([]);
  const [coffees, setCoffees] = useState([]);

  const [DonutFlavor, setDonutFlavor] = useState(false);
  const [bagelFlavor, setbagelFlavor] = useState(false);
  const [pastryFlavor, setpastryFlavor] = useState(false);
  const [muffinFlavor, setmuffinFlavor] = useState(false);
  const [coffeeFlavor, setcoffeeFlavor] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFlavor, setSelectedFlavor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState();

  // const availaibleQuantity = availaibleFlavors.flavors.find(
  //   (flavor) => flavor.name === selectedFlavor
  // );

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/donuts")
      .then((res) => res.json())
      .then((donuts) => {
        setDonuts(donuts);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/bagels")
      .then((res) => res.json())
      .then((bagels) => {
        setBagels(bagels);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/pasteries")
      .then((res) => res.json())
      .then((pastries) => {
        setPastries(pastries);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/pasteries")
      .then((res) => res.json())
      .then((muffins) => {
        setMuffins(muffins);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/coffees")
      .then((res) => res.json())
      .then((coffees) => {
        setCoffees(coffees);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <form>
        <h2>Order Now</h2>
        <label>Pick up Date</label>
        <input type="date" />
        <label>Pick up Time</label>
        <input></input>
        <label>Choose:</label>
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

        <label>Flavor</label>
        <select
          onChange={(e) => setSelectedFlavor(e.target.value)}
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

        {selectedCategory == categories[0]
          ? donuts.map((donut, index) => (
              <option value={index + 1} key={donut}>
                {donut.flavor}
              </option>
            ))
          : null}

        {selectedCategory == categories[1]
          ? bagels.map((bagel, index) => (
              <option value={index + 1} key={bagel}>
                {bagel.flavor}
              </option>
            ))
          : null}

        {selectedCategory == categories[2]
          ? pastries.map((pastry, index) => (
              <option value={index + 1} key={pastry}>
                {pastry.flavor}
              </option>
            ))
          : null}
        {selectedCategory == categories[3]
          ? muffins.map((muffin, index) => (
              <option value={index + 1} key={muffin}>
                {muffin.flavor}
              </option>
            ))
          : null}
        {selectedCategory == categories[4]
          ? coffees.map((coffee, index) => (
              <option value={index + 1} key={coffee}>
                {coffee.flavor}
              </option>
            ))
          : null}
        <p>Total:</p>
        <button>Check Out</button>
      </form>
    </div>
  );
}
