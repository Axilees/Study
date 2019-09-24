import React, {Component} from "react";
import {Paper} from "@material-ui/core";

function withBluePaper<P>(WrappedComponent:  React.ComponentType<P>){
    return class extends Component {
        render() {
            return (
                 <Paper style ={{ backgroundColor: "blue", margin: 20, width: 300 }}>
                     <WrappedComponent {...this.props as P}/>
                 </Paper>
            );
        }
    };
}

export default withBluePaper;
