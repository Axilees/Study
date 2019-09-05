import React, {Component, Fragment} from "react";
import Slide from "./Slide";

class App extends Component{

    constructor(props){
        super(props);
        this.state ={
            sideToShow: "left"
        }
    }
    render(){
        return(
            <Fragment>
              <h1>Yes!</h1>
              <Slide/>
            </Fragment>
        )
    }

}

export default App;
