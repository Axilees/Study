import React,{Component} from "react";
import Paper from "@material-ui/core/Paper";
import {StateContext} from "./StateContext";

class Output extends Component{

    render(){
        let props = this.props;
        let context = this.context;
        return(
            <StateContext.Consumer>
                {({state}) =>(
          <Paper style ={{width: 200, height: 100, textAlign: "center", paddingTop: 20, margin: 30}}>
              {state}
          </Paper>
                    )}
            </StateContext.Consumer>
        )
    }
}

Output.ContextType = StateContext;
export default Output;