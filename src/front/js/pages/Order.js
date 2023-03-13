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

  const [selectedCategory, setSelectedCategory] = React.useState();
  const [selectedFlavor, setSelectedFlavor] = React.useState();
  const [selectedQuantity, setSelectedQuantity] = React.useState();

  const availaibleFlavors = {if(selectedCategory === "Donuts") {donuts.map(flavor => {return donuts.flavor})}
  
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
      .then((bagel) => {
        setBagels(bagels);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/pasteries")
      .then((res) => res.json())
      .then((pastry) => {
        setPastries(pastries);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/pasteries")
      .then((res) => res.json())
      .then((muffin) => {
        setMuffins(muffins);
      })
      .catch((err) => console.log(err));
  });
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/coffees")
      .then((res) => res.json())
      .then((coffee) => {
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
        {/* <label>Choose:</label> */}
        {/* <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {categories.map((category, index) => (
            <option value={index + 1} key={category}>
              {category}
            </option>
          ))}
        </select> */}
        <div>
          <label>Variety</label>
          <select
            placeholder="Choose a variety"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>--Choose a Variety--</option>
            {categories.map((category, index) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Flavor</label>
          <select
            placeholder="Choose a flavor"
            value={selectedFlavor}
            onChange={(e) => setSelectedFlavor(e.target.value)}
          >
            <option>--Choose a Flavor--</option>
            {console.log(availaibleFlavors)};
            {availaibleFlavors?.map((flavor, index) => {
              return (
                <option value={flavor} key={index}>
                  {flavor}
                </option>
              );
            })}
          </select>
        </div>

        {/* <select>
          {categories === "Donuts" && setHasDonut(true)
            ? donuts.map((donut, index) => (
                <option value={index + 1} key={donut}>
                  {donut} : null
                </option>
              ))
            : null}

          {categories === "Bagels" && setHasBagel(true)
            ? bagels.length &&
              hasBagel &&
              bagels.map((bagel, index) => (
                <option value={index + 1} key={bagel}>
                  {bagel}
                </option>
              ))
            : null}

          {categories === "Pastry" && setHasPastry(true)
            ? pastries.length &&
              hasPastry &&
              pastries.map((pastry, index) => (
                <option value={index + 1} key={pastry}>
                  {pastry}
                </option>
              ))
            : null}

          {categories === "Muffin" && setHasMuffin(true)
            ? muffins.length &&
              hasMuffin &&
              muffins.map((muffin, index) => (
                <option value={index + 1} key={muffin}>
                  {muffin}
                </option>
              ))
            : null}

          {categories === "Coffee" && setHasCoffee(true)
            ? coffees.length &&
              hasCoffee &&
              coffees.map((coffee, index) => (
                <option value={index + 1} key={coffee}>
                  {coffee}
                </option>
              ))
            : null}
        </select> */}
        <p>Total:</p>
        <button>Check Out</button>
      </form>
    </div>
  );
}
}
