import React from 'react';
import Product from '../Product';
import './styles.css';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image"
					src="https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/120539556_461257484782337_3547636471815234288_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=9GlpHUrXEoIAX8Wb4Aa&tp=18&oh=eac6905d53956386968a410826a1a5ed&oe=5FC749EC"
					alt="naju design"
				/>
			</div>
            <div className="home__row">
                {/* <Product />
                <Product /> */}
            </div>
            <div className="home__row">
                {/* <Product />
                <Product /> 
                <Product /> 
                */}
            </div>
            <div className="home__row">
                {/* <Product />*/}
            </div>
		</div>
	);
}

export default Home;
