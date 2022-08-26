import "../assets/styles/card.scss";

function ProductCard(props) {
	const independentLiving = "IndependentLiving";
	const supportAvailable = "SupportAvailable";

	const findTagClass = () => {
		if (props.home.type === independentLiving) {
			return "independent";
		} else if (props.home.type === supportAvailable) {
			return "support";
		}
	};

	return (
		<article className="card">
			<div className="card__img">
				<img alt="property" src="https://via.placeholder.com/380x230/9FDCD1" />
				<p className={findTagClass()}>
					{props.home.type === supportAvailable && <span>Restaurants & </span>}
					{props.home.type.replace(/([a-z])([A-Z])/g, "$1 $2")}
				</p>
			</div>
			<div className="card__info">
				<h3>{props.home.title}</h3>
				<p>{props.home.address}</p>
				<p className="card__price">
					New Properties for Sale from <span>{props.home.price}</span>
				</p>
				<p>Shared Ownership Available</p>
			</div>
		</article>
	);
}

export default ProductCard;
