import React, {Component} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import "../config";


const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});


class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			remember : false
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChecked = this.onChecked.bind(this);
	}

	onChange(e) {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	onChecked(e) {
		this.setState({"remember" : e.target.checked});
	}

	onSubmit(e) {
		e.preventDefault();
		let {email, password} = this.state;
		if(email !== global.username) {
			alert("Wrong Email Id");
			return false;
		} else {
			if(password !== global.password) {
				alert("Wrong Password");
				return false;
			} else {
				sessionStorage.setItem("auth", true);
				sessionStorage.setItem("email", email);
				this.props.onLogin(true);
			}
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<main className={classes.main}>
				<CssBaseline />
				<Paper className={classes.paper}>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} onSubmit={this.onSubmit}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="email">Email Address</InputLabel>
							<Input id="email" name="email" type="email" autoComplete="email" autoFocus onChange={this.onChange}/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.onChange}/>
						</FormControl>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" id="remember" name="remember" onChange={this.onChecked} />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign in
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}

Signin.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);