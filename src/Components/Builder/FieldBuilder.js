import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Input from "@material-ui/core/Input";

const styles = theme =>({});

class FieldBuilder extends Component{
	constructor(props) {
		super(props);
		this.elementCreator = this.elementCreator.bind(this);
	}

	elementCreator() {
		let fieldDetails = this.props.config;
		console.log(fieldDetails)
		let returnElement;
		switch (fieldDetails.type) {
			case "textbox" :
				returnElement = <FormControl margin={fieldDetails.margin} width={fieldDetails.width} required={fieldDetails.required}>
					<InputLabel htmlFor={fieldDetails.name}>{fieldDetails.displayName}</InputLabel>
					<Input id={fieldDetails.name} name={fieldDetails.name} autoComplete={fieldDetails.autocomplete} autoFocus />
				</FormControl>
		}

		return returnElement;
	}

	render() {
		let element = this.elementCreator();
		return (
			<div>
				{element}
			</div>
		);
	}

}


export default withStyles(styles)(FieldBuilder);