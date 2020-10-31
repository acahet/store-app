import React from 'react';
import Product from '../Product';
import './styles.css';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/120539556_461257484782337_3547636471815234288_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=9GlpHUrXEoIAX8Wb4Aa&tp=18&oh=eac6905d53956386968a410826a1a5ed&oe=5FC749EC"
					alt="naju design"
				/>

				<div className="home__row">
					<Product
						title="Star shape ear rings"
						price="25,00"
						image="https://scontent-dub4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/121934439_371737297574244_1926748697094859514_n.jpg?_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_cat=100&_nc_ohc=E7ZorCV187cAX-WyWjU&_nc_tp=24&oh=d139ace145515dedfb06828824d4a452&oe=5FC56F05"
					/>
					<Product
						title="Hear necklace"
						price="35,99"
						image="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/119982594_1554607371378249_5818884094333562562_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=mesyaD3iDY8AX_O7eH5&_nc_tp=25&oh=c0641571c5981ee467e11c58cf6361e6&oe=5FC5913F"
					/>
				</div>
				<div className="home__row">
					<Product
						title="Hear necklace"
						price="35,99"
						image="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/119982594_1554607371378249_5818884094333562562_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=mesyaD3iDY8AX_O7eH5&_nc_tp=25&oh=c0641571c5981ee467e11c58cf6361e6&oe=5FC5913F"
					/>
					<Product
						title="hair band"
						price="5,25"
						image="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/119919263_635583817317218_3735962489358172210_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=efqDkUkfdLoAX8hgsW9&_nc_tp=15&oh=c0199acbc15f78e020dd7df7c2202994&oe=5FC8FFAC"
					/>
					<Product
						title="Star shape ear rings"
						price="25,00"
						image="https://scontent-dub4-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/121934439_371737297574244_1926748697094859514_n.jpg?_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_cat=100&_nc_ohc=E7ZorCV187cAX-WyWjU&_nc_tp=24&oh=d139ace145515dedfb06828824d4a452&oe=5FC56F05"
					/>
				</div>
				<div className="home__row">
					<Product
						title="bracelets"
						price="3.50 each"
						image="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/120028246_633709937291714_1727584581355791814_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=GJMXyJX1PwEAX9EpuYK&_nc_tp=15&oh=30e66deb69906865817e417209918785&oe=5FC5C72B"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
