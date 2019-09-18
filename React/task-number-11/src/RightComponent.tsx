import React, {Component} from "react"
import {createStyles, Paper, withStyles, WithStyles} from "@material-ui/core";

const rightStyle = createStyles(
    {
        right: {
            width: 300,
            textAlign: "center",
            marginLeft: 20
        }
    }
);

interface Props extends WithStyles<typeof rightStyle> {
}

interface State {
}

class RightComponent extends Component<Props, State> {
    render() {
        return (<Paper className={this.props.classes.right}>
                  <h1>Right!!!</h1>
                </Paper>);
    }
}

export default withStyles(rightStyle)(RightComponent);