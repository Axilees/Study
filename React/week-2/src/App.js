import React, {Component} from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import {withStyles} from "@material-ui/core";
import {InputContext} from "./InputContext";

const appStyles = {
    mainDiv: {
        margin: 20
    }
}

@withStyles(appStyles)
class App extends Component {

    constructor(props){
       super(props);
       this.state = {name:"Kostya", surname:"Tuezov", inputName: this.inputName, inputSurName: this.inputSurName }

    }

    inputName = (e) =>{
        this.setState({name: e.target.value})
    }

    inputSurName = (e) =>{
        this.setState({surname: e.target.value})
    }



    render(){
        return(
            <div className={this.props.classes.mainDiv}>
                <InputContext.Provider value={this.state}>
                  <InputComponent/>
                </InputContext.Provider>
                <InputContext.Provider value={this.state}>
                  <OutputComponent/>
                </InputContext.Provider>
            </div>
        )
    }
}

export default App;