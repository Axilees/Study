import React from "react";
import {ValueContext} from "./ValueContext";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function OutputComponent(props) {
    return (
        <ValueContext.Consumer>
            {({value}) => (
                <div className={props.inputStyle}>
                    <Paper style={{padding: 20}}>
                        <Typography variant="h3"> {value} </Typography>
                    </Paper>
                </div>
            )}
        </ValueContext.Consumer>
    )
}

export default OutputComponent;
