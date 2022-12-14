import "./App.scss";
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
import arrow from "./assets/images/Chevron.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
	const [homes, setHomes] = useState([]);
	const [search, setNewSearch] = useState("");
	const [filterNoResults, setFilterNoResults] = useState("");

	const dataApi = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";

	// Fetching property data from db
	async function fetchData() {
		let response = await fetch(dataApi);
		if (response.ok) {
			let data = await response.json();
			setHomes(data);
		} else {
			console.error();
		}
	}

	const handleSearchChange = (e) => {
		setNewSearch(e.target.value);
	};

	useEffect(() => {
		fetchData();
	}, []);

	// Items' filter function on input change more than 3 symbols
	useEffect(() => {
		const minLength = 3;
		if (search.trim(" ").length > minLength) {
			const filteredCards = homes.filter((home) => {
				return home.title.toLowerCase().includes(search.trim(" ").toLowerCase());
			});
			setHomes(filteredCards);
			if(filteredCards.length === 0){
				setFilterNoResults("There is no property containing this title");
			};
		} else if (search.trim(" ").length <= minLength || !search) {
			fetchData();
			setFilterNoResults("");
		}
	}, [search]);

	return (
		<div className="App">
			<Link to="/" className="router-link">
				<h1>Our Latest Developments</h1>
			</Link>
			<section className="container filter-block">
				<Filter onChange={handleSearchChange} value={search} />
				{filterNoResults &&
				<p>{filterNoResults}</p>}
			</section>
			<section className="container">
				<ProductsList homes={homes} />
			</section>
			<button className="see-more" aria-label="see more" title="see more">
				See more <img src={arrow} alt="arrow right" width="7" height="17" />
			</button>
		</div>
	);
}

export default App;
