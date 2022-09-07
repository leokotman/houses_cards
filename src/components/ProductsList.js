import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard";
import "../assets/styles/list.scss";

function ProductsList(props) {
	return (
			<div className="product-list">
			{props.homes.map((home) => {
				return (
				<Link to={`/details/${home.id}`} key={home.id} className="router-link">
					<ProductCard key={home.id} home={home} />	
				</Link>
				);
			})}
			</div>
	);
}

export default ProductsList;
