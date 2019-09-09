import React, {Component} from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

const mainStyle = {
    root: {
        marginTop: 50,
        marginLeft: "20%",
        width: 900,
        display: "inline-block"
    },
    input:{
        width: 400,
        display: 'inline-block',
        marginLeft: 30,
        marginRight: 15,
    },
    output:{
        width: 400,
        display: 'inline-block',
        marginRight: 30,
        marginLeft: 15,
    }
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <InputComponent inputStyle = {classes.input}/>
                    <OutputComponent inputStyle = {classes.output}/>
                </Paper>
            </div>
        );
    }
}

export default withStyles(mainStyle)(App);
