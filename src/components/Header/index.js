import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
	return (
		<div className="header">
			<img src="https://fontmeme.com/permalink/201031/9e586244759b6358562bf4b512e3553e.png" alt="store app" />
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello you</span>
					<span className="header__optionLineTwo">Sign </span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& orders </span>
				</div>
			</div>
			<div className="header__optionBasket">
				<ShoppingBasketIcon fontSize="large" />
				<span className="header__optionLineTwo header__basketCount">0</span>
			</div>
		</div>
	);
}

export default Header;
