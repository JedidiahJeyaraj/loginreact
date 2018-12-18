import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import FieldBuilder from "./FieldBuilder";

const styles = theme => ({
	root: {
		flexGrow: 0,
	},
	paper: {
		height: 140,
		width: 600,
	},
	control: {
		padding: theme.spacing.unit * 2,
		align:'center'
	},
});

class FormBuilder extends Component{
	constructor(props) {
		super(props);
		this.state = {
			formData : props.dataSrc
		}
	}
	render() {
		const element = this.state.formData;
		const { classes } = this.props;
		let fields = element.fields.map((fieldDetails, fieldId) => {
			return <FieldBuilder config={fieldDetails} key={fieldId}/>;
		});
		return(
			<form {...element} >
				<Grid container className={classes.root} spacing={8}>
					{fields}
				</Grid>
			</form>
		);
	}
}


export default withStyles(styles)(FormBuilder);