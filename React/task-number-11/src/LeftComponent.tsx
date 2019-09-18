import React, {Component, } from "react";
import  {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Paper, TextField, withStyles} from "@material-ui/core";

const leftStyle = createStyles({
    left: {
        width: 300,
        height: 300,
        textAlign: "center",
        marginRight: 20
    }
});

interface Props extends WithStyles<typeof leftStyle> {
  text: string;
}

interface State {
    aaa: string;
}

class LeftComponent extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {aaa: ""};
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({aaa: e.target.value});
    }

    render() {
        return (<Paper className={(this.props.classes.left)}>
                <h1>{this.state.aaa}</h1>
                <h1>{this.props.text}</h1>
                <TextField onChange={this.handleChange} id="text-field" label="Please input something!" />
             </Paper>
        );
    }

}

export default withStyles(leftStyle)(LeftComponent);