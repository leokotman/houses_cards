import ProductCard from "./ProductCard";
import "../assets/styles/list.scss";

function ProductsList(props) {
	return (
		<div className="product-list">
			{props.homes.map((home, index) => {
				return <ProductCard key={index} home={home} />;
			})}
		</div>
	);
}

export default ProductsList;
