import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="checkout" component={Checkout} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
