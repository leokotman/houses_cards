import './App.scss';
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
import arrow from "./assets/images/Chevron.svg";

import { useState, useEffect } from "react";

function App() {
  const [homes, setHomes] = useState([]);
  const [search, setNewSearch] = useState("");

  async function fetchData () {
    let response = await fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes");
    if(response.ok) {
      let data = await response.json();
      setHomes(data);
    } else {
      console.error();
    }
  };
  
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search.trim(" ").length > 3) {
      const filteredCards = homes.filter((home) => {
        return home.title.toLowerCase().includes(search.trim(" ").toLowerCase());
      });
      setHomes(filteredCards);
    } else if (search.trim(" ").length <= 3 || !search) {
      fetchData();
    }
  }, [search]);

  return (
    <div className="App">
      <h1>Our Latest Developments</h1>
      <section className="container filter-block">
        <Filter onChange={handleSearchChange} value={search} />
      </section>
      <section className="container">
        <ProductsList homes={homes} />
      </section>
      <button className="see-more">See more <img src={arrow} /></button>
    </div>
  );
}

export default App;
