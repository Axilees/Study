import React, {Component} from "react";
import {Paper} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {InputContext} from "./InputContext";

const outputStyles = {
    paper: {
        margin: 30,
        width: 400,
        height: 200,
        display: "inline-block"
    },
    typography: {
        margin: 22,
        display: "block"
    }
}

class OutputComponent extends Component {

    render() {
        return (
            <InputContext.Consumer>
                {
                    ({name, surname}) => (
                        <Paper className={this.props.classes.paper}>
                            <Typography variant="h5" gutterBottom className={this.props.classes.typography}>
                                {name}
                            </Typography>
                            <Typography variant="h5" gutterBottom className={this.props.classes.typography}>
                                {surname}
                            </Typography>
                        </Paper>
                    )
                }
            </InputContext.Consumer>
        )
    }
}

export default withStyles(outputStyles)(OutputComponent);