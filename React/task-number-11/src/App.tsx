import React from "react";
import {Component} from "react";
import {Button, TextField} from "@material-ui/core";
import LayoutComponent from "./LayoutComponent";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

export interface AppProps {
}

export interface SuperLabelProps {
    show: boolean;
}

function SuperLabel(props: SuperLabelProps) {
    if (!props.show) {
        return null;
    }
    return (<h1>THIS IS SHOW!</h1>);
}

interface State {
    showButton: boolean;
    text: string;
}

interface NumberProps {
    numbers: Array<number>;
}

function NumberList(props: NumberProps) {
    const numbers = props.numbers;
    const listNumbers = numbers.map((number) =>
        <li>{number}</li>
    );
    return (<ul>{listNumbers}</ul>

    );
}

const numbers = [1, 2, 3, 4, 5];

export default class App extends Component<AppProps, State> {

    constructor(props: AppProps) {
        super(props);
        this.state = {showButton: true, text: ""};
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
                <Button onClick={this.handleClick} color="primary" variant="outlined">Switch!</Button>
                <h1>Typescript! {showButton ? "TRUE" : "FALSE"}</h1>
                {button}
                <SuperLabel show={showButton}/>
                <LayoutComponent leftSide={<LeftComponent text={this.state.text}/>}
                                 rightSide={<RightComponent/>}/>
                <TextField id="text-field" label="Please input something" onChange={this.handleChange}/>
                <NumberList numbers = {numbers} />
            </div>
        );
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({text: e.target.value});
    }
}
