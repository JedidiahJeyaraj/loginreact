import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router";
import { HashRouter,Link} from 'react-router-dom';
import Signin from "./Signin";
import Home from "./Home";
import About from "./About";




const PageNotFound = () => <div>Page not Found</div>;

	const Navbar = (props) => (<div>
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<div onClick={() => {sessionStorage.removeItem("auth");sessionStorage.removeItem("email"); window.location.href = 'http://localhost:3000';}}>Logout</div>
			</li>
		</ul>
	</div>);

class Main extends Component {
	state = {
		auth : false
	};

	logout() {
		localStorage.removeItem("auth");
		localStorage.removeItem("email");
	}
	render() {
		return(
			<div>
				<HashRouter>
					<div>
						<Navbar logout={this.logout} />
						<Switch>
							<Route path="/" exact={true} component={Home}/>
							<Route path="/about" exact component={About}/>
							<Route component={PageNotFound}/>
						</Switch>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;