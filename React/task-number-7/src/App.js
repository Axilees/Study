import React, {Component} from "react";
import {ProxyButton} from "./proxy/ProxyButton";
import Paper from "@material-ui/core/Paper";
import {ThemeContext, themes} from "./context/ThemeContext";
import Consumer from "./Consumer";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            theme: themes.primary
        }
    }
    changeTheme =() => {
        this.setState(state =>({
            theme: state.theme === themes.primary ? themes.secondary : themes.primary
        }));
    }

    render() {
        return (
            <div>
                <Paper style={{marginTop: 20, marginLeft: 20, height: 200, width: 400}}>
                    <h1 style={{margin: 20}}>Proxy Component</h1>
                    <ProxyButton text="Super" color="primary" style={{marginLeft: 10}}/>
                    <ProxyButton text="Second!" color="secondary" style={{marginLeft: 10}}/>
                </Paper>
                <ProxyButton text="Change Theme" onClick={this.changeTheme} style = {{margin: 30}}/>
                <ThemeContext.Provider value = {this.state.theme}>
                    <Consumer/>
                </ThemeContext.Provider>
            </div>
        )
    }

}

export default App;
