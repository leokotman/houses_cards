import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard";
import "../assets/styles/list.scss";

function ProductsList(props) {
	return (
			<div className="product-list">
			{props.homes.map((home, index) => {
				return (
				<Link to={`/details/${home.id}`} key={index} className="router-link">
					<ProductCard key={index} home={home} />	
				</Link>
				);
			})}
			</div>
	);
}

export default ProductsList;
