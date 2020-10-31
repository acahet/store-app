import React from 'react';
import Subtotal from '../Subtotal';
import './styles.css';
export default function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<div>
					<h2 className="checkout__title"> Your Shopping Basket</h2>
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}
