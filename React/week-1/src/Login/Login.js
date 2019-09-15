import React from "react";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const styles = makeStyles(theme => ({
    main: {
        marginLeft: '35%',
        marginTop: '10%',
        width: 500
    },
    loginText:{
      textAlign: "center",
      marginBottom: theme.spacing(1)
    },
    loginInput:{
        marginLeft: '30%',
        marginRight: theme.spacing(1),
        width: 200,
        padding: 0
    },
    button:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: '40%'
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}))

function Login(props) {
        const mainStyle = styles();
        return(
            <Paper className={mainStyle.main}>
                <Typography className={mainStyle.loginText} variant={"h6"} component={"h6"}>Please input credentials</Typography>
                <TextField className={mainStyle.loginInput} id="login-text" label="Login" margin="normal"/>
                <TextField className={mainStyle.loginInput} id="password-text" label="Password" margin="none"/>
                <br/>
                <Button variant="contained" color="primary" className={mainStyle.button}>
                    Login
                </Button>
            </Paper>
        )
}

export default Login