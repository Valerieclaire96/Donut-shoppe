import React from "react";
import { useEffect, useState } from "react";

export default function Order() {
  let categories = ["Donuts", "Bagel", "Pastry", "Muffin", "Coffee"];
  const [donuts, setDonuts] = useState([]);
  const [bagels, setBagels] = useState([]);
  const [pastries, setPastries] = useState([]);
  const [muffins, setMuffins] = useState([]);
  const [coffees, setCoffees] = useState([]);

  const [hasDonut, setHasDonut] = useState(false);
  const [hasBagel, setHasBagel] = useState(false);
  const [hasPastry, setHasPastry] = useState(false);
  const [hasMuffin, setHasMuffin] = useState(false);
  const [hasCoffee, setHasCoffee] = useState(false);

  useEffect(() => {
    fetch(
      "https://3001-valerieclai-donutshoppe-sl0tzqe25kw.ws-us89.gitpod.io/api/donuts"
    )
      .then((res) => res.json())
      .then((donuts) => {
        setDonuts(donuts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://3001-valerieclai-donutshoppe-sl0tzqe25kw.ws-us89.gitpod.io/api/bagels"
    )
      .then((res) => res.json())
      .then((bagel) => {
        setBagels(bagels);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    fetch(
      "https://3001-valerieclai-donutshoppe-sl0tzqe25kw.ws-us89.gitpod.io/api/pasteries"
    )
      .then((res) => res.json())
      .then((pastry) => {
        setPastries(pastries);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    fetch(
      "https://3001-valerieclai-donutshoppe-sl0tzqe25kw.ws-us89.gitpod.io/api/pasteries"
    )
      .then((res) => res.json())
      .then((muffin) => {
        setMuffins(muffins);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    fetch(
      "https://3001-valerieclai-donutshoppe-sl0tzqe25kw.ws-us89.gitpod.io/api/coffees"
    )
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
        <label>Choose:</label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {categories.map((category, index) => (
            <option value={index + 1} key={category}>
              {category}
            </option>
          ))}
        </select>
        <select>
          {categories === "Donuts" && setHasDonut(true)
            ? donuts.length &&
              hasDonut &&
              donuts.map((donut, index) => (
                <option value={index + 1} key={donut}>
                  {donut}
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
        </select>
        <p>Total:</p>
        <button>Check Out</button>
      </form>
    </div>
  );
}
