import './App.scss';
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
import arrow from "./assets/images/Chevron.svg";

import { useState, useEffect } from "react";

function App() {
  const [homes, setHomes] = useState([]);

  async function fetchData () {
    let response = await fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes");
    let data = await response.json();
    console.log(data);
    setHomes(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Our Latest Developments</h1>
      <section className="container filter-block">
        <Filter />
      </section>
      <section className="container">
        <ProductsList homes={homes} />
      </section>
      <button className="see-more">See more <img src={arrow} /></button>
    </div>
  );
}

export default App;
