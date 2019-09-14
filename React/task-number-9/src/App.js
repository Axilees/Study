import React,{Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {StateContext} from "./StateContext";
import Output from "./Output";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Paper from "@material-ui/core/Paper";


const styles = {primary:{margin: 10}};

@withStyles(styles)
class App extends Component {

    constructor(props){
        super(props);
        this.state = {state:""}
    }

    handleEverything = ({type}) =>{

        switch(type){
            case "click": return this.setState(state => ({state: "click!" }));
            case "mouseenter": return this.setState(state => ({state: "mouseentered!" }));
            default: return console.log("default!");
        }
    }

    render(){
        return(
                <div>
                    <StateContext.Provider value = {this.state}>
                      <Output />
                     </StateContext.Provider>
                    <Fab variant="extended" aria-label="delete" style={{width:10}}
                    onClick={this.handleEverything} onMouseEnter={this.handleEverything}>
                        <AddIcon />
                    </Fab>

                </div>
        );
    }
}

export default App;
