import React, {useState} from "react";
import {createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useApolloClient, useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "./Loading";

const useStyles = makeStyles(() =>
    createStyles({
        paper: {
            marginTop: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%',
            marginTop: 10,
        },
        submit: {
            marginTop: 30,
        },
        error: {
            color: "#ff0000"
        }
    }),
);

const LOGIN = gql`
    mutation login($login: String!, $password: String!) {
        login(input: {clientMutationId: $login, password: $password, username: $login}) {
            authToken
            refreshToken
        }
    }
`;

function Login() {
    const client = useApolloClient();
    const [login, {loading, error, data}] = useMutation(
        LOGIN,
        {
            onCompleted({login}){
                sessionStorage.setItem('token',`Bearer ${login.authToken}`);
                client.writeData({ data: { isLoggedIn: true } });
            }
        }

    );

    if (loading) return (<Loading/>);
    if (error) {
        return <LoginPage login={login} error={error.message}/>;
    }

    return <LoginPage login={login}/>;
}

export default Login;

function LoginPage(props) {

    const classes = useStyles();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginChange = event => {
        setLogin(event.target.value);
    };

    const onPasswordChange = event => {
        setPassword(event.target.value);
    };

    const onClick = event => {
        props.login({variables: {login: login, password: password}});
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Please login
                </Typography>
                {props.error &&
                <Typography component="h6" variant="h6" className={classes.error}>
                    {props.error}
                </Typography>
                }
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Login"
                        name="login"
                        type="text"
                        onChange={onLoginChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={onPasswordChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onClick}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </Container>
    )
}