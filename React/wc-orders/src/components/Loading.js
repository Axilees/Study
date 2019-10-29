import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        progress: {
            margin: 20,
        },
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        center: {
            maxWidth: "50%"
        }
    }),
);


function Loading() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.center}>
                <Typography component="h6" variant="h6">
                    Loading...
                </Typography>
                <CircularProgress className={classes.progress}/>
            </div>
        </div>
    );
}

export default Loading;