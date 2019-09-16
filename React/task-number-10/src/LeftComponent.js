import React from "react";
import {Component} from "react";
import {Paper, TextField} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const leftStyle = {
    left:{
        width: 300,
        height: 300,
        textAlign: "center",
        marginRight: 20
    }
};

@withStyles(leftStyle)
class LeftComponent extends Component{

    constructor (props){
        super(props);
        this.state = {aaa: ""}
    }

    handleChange=(e) =>{
       this.setState({aaa: e.target.value});
    };

    render(){
        return(
            <Paper className={this.props.classes.left}>
               <h1>{this.state.aaa}</h1>
                <h1>{this.props.text}</h1>
                <TextField onChange={this.handleChange} id="text-field" label="Please input something" />
            </Paper>
        )
    }
}
export default LeftComponent;