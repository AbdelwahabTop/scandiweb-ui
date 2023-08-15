function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__title">
        <h2>Product Title</h2>
      </div>
      <div className="product-card__price">
        <h2>Product Price</h2>
      </div>
      <div className="product-card__button">
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
