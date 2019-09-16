import React, {Component} from "react";
import {Box} from "@material-ui/core";

class LayoutComponent extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Box display="flex" style={{border: "1px solid black", margin: 30, padding: 20, width: 900}}>
                <div>{this.props.leftSide}</div>
                <div>{this.props.rightSide}</div>
                </Box>
        )
    }
}

export default LayoutComponent;
