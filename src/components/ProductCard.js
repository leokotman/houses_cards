import "../assets/styles/card.scss";

function ProductCard(props) {
	return (
		<article className="card">
            <div className="card__img">
              <img alt="property" src="https://via.placeholder.com/380x230/9FDCD1" />
              <span>{props.home.type}</span> 
            </div>
			<h3>{props.home.title}</h3>
			<p>{props.home.address}</p>
			<p>
				New Properties for Sale from <span>{props.home.price}</span>
			</p>
            <p>Shared Ownership Available</p>
		</article>
	);
}

export default ProductCard;
