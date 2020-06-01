import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layouts/Landing';
import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Route exact path='/' component={Landing} />
				<section class='container'>
					<Switch>
						<Route exact path='/login' component={Login}></Route>
						<Route exact path='/register' component={Register}></Route>
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
};

export default App;
