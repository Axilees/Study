import React from "react";
import {Component} from "react";
import {Button} from "@material-ui/core";

export interface AppProps {
}

export interface SuperLabelProps {
   show: boolean;
}

function SuperLabel(props: SuperLabelProps) {
  if (!props.show){
      return null;
  }
  return(<h1>THIS IS SHOW!</h1>);
}

export default class App extends Component<AppProps, {showButton: boolean}> {

    constructor(props: AppProps) {
        super(props);
        this.state = {showButton: true};
    }

    handleClick = () => {
        this.setState((state) => ({showButton: !state.showButton}));
    }

    render() {
        let button;
        let showButton = this.state.showButton;
        if (showButton) {
            button = <h1>TRUE!</h1>;
        } else {
            button = <h1>FALSE!</h1>;
        }
        return (
            <div>
                <Button onClick={this.handleClick} color = "primary" variant="outlined">Switch!</Button>
                <h1>Typescript! {showButton ? "TRUE" : "FALSE"}</h1>
                {button}
                <SuperLabel show={showButton}/>
            </div>
        );
    }
}
