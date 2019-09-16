import React from "react";
import {Component} from "react";
import {Paper} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const rightStyle = {
    right:{
        width: 300,
        textAlign: "center",
        marginLeft: 20
    }
};

@withStyles(rightStyle)
class RightComponent extends Component{

    render(){
        return(
            <Paper className={this.props.classes.right}>
                <h1>Right!!!</h1>
            </Paper>
        )
    }
}

export default RightComponent;