import React, {Component} from 'react';
import * as axios from "axios";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		axios.get("http://api.football-data.org/v2/teams/81", {headers : {"X-Auth-Token" : "17cf9459786a4729b0665027533aad47"}})
			.then((res) => this.setState({data : res.data}))
			.then(() => {
				this.setState({
					name : this.state.data.name,
					logo : this.state.data.crestUrl
				});
			})
			.catch((err) => alert("error", err));
	}

	render() {
		return (
			<div>
				It's Home {this.state.name}
				<img src={this.state.logo} width={"100px"}/>
			</div>
		);
	}
}

export default Home;