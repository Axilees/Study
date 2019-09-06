import React, {Component, Fragment} from "react";
import Slide from "./Slide";
import {Switch} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class App extends Component{

    constructor(props){
        super(props);
        this.state ={
            sideToShow: "left",
            checked: true
        }
    }

    handleChange=()=>{
        this.setState(state=>({
           sideToShow: state.sideToShow === "left"? "right" : "left",
            checked: !state.checked
        }));
    }

    render(){
        return(
            <Fragment>
                <FormGroup style={{marginLeft:'50%'}}>
                    <FormControlLabel control={<Switch checked={this.state.checked} onChange={this.handleChange} />} label="Switch!"/>
                </FormGroup>
              <Slide slideToShow={this.state.sideToShow}/>
            </Fragment>
        )
    }

}

export default App;
