import React from "react";
import {ValueContext} from "./ValueContext";
import {Paper} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function ImportComponent(props) {

    return (
        <ValueContext.Consumer>
            {({changeValue}) => (
                <div className={props.inputStyle}>
                    <Paper style={{padding: 20}}>
                        <TextField
                            id="standard-value"
                            label="Value"
                            style={{width: 200}}
                            onChange={(e) => changeValue(e)}
                            margin="normal"
                        />
                    </Paper>
                </div>
            )}
        </ValueContext.Consumer>
    )
}

export default ImportComponent;
