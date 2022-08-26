import ProductCard from "./ProductCard";
import "../assets/styles/list.scss";

function ProductsList() {
  return (
    <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default ProductsList