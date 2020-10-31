import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './styles.css';
function Subtotal() {
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => {
					<>
						<p>
							Subtotal 0 items:
							{/* <p>Subtotal({basket.length} items: */}
							{/* <strong>{`${value}`}</strong> */}
							<strong>0</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>;
				}}
				decimalScale={2}
				value={0}
				// value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'R$'}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
