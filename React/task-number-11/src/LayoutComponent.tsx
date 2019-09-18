import React, {Component, ReactNode} from "react";
import {Box} from "@material-ui/core";

interface Props {
    leftSide: ReactNode;
    rightSide: ReactNode;
}

class LayoutComponent extends Component<Props, {}> {
    shouldComponentUpdate(): boolean {
        return false;
    }

    render() {
        return (
            <Box display="flex" style={{border: "1px solid black", margin: 30, padding: 20, width: 900}}>
                <div>{this.props.leftSide}</div>
                <div>{this.props.rightSide}</div>
            </Box>
        );
    }
}

export default LayoutComponent;