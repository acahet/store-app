import React from 'react';
import './styles.css';
function Product({ title, image, price }) {
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>R$ </small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					<p>****</p>
				</div>
			</div>
			<img src={image} alt={title} />
			<button>Add to Basket</button>
		</div>
	);
}

export default Product;
