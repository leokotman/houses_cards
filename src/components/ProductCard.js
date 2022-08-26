import "../assets/styles/card.scss";

function ProductCard(props) {
	return (
		<article className="card">
            <div className="card__img">
              <img alt="property" src="https://via.placeholder.com/380x230/9FDCD1" />
              <span>living text</span> 
            </div>
			<h3>random title</h3>
			<p>random address</p>
			<p>
				New Properties for Sale from <span>random price</span>
			</p>
            <p>Shared Ownership Available</p>
		</article>
	);
}

export default ProductCard;
