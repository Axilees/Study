import React, {Component} from "react"
import {Paper, TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {InputContext} from "./InputContext";

const importStyles = {
    paper: {
        margin: 30,
        width: 400,
        height: 200,
        display: "inline-block"
    },
    textField: {
        display: "block",
        marginLeft: 10,
        marginTop: 10,
    }
}

@withStyles(importStyles)
class InputComponent extends Component {

    render() {
        return (
            <InputContext.Consumer>
                {
                    ({inputName, inputSurName}) =>(
                    <Paper className={this.props.classes.paper}>
                        <TextField
                            id="name"
                            label="Name"
                            className={this.props.classes.textField}
                            onChange={inputName}
                        />
                        <TextField
                            id="surname"
                            label="Surname"
                            className={this.props.classes.textField}
                            onChange={inputSurName}
                        />
                    </Paper>
                    )
                }
            </InputContext.Consumer>
        )
    }
}

export default InputComponent;
