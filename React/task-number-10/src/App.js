import React, {Component} from "react";
import LayoutComponent from "./LayoutComponent";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import {TextField} from "@material-ui/core";

class App extends Component {

    constructor(props){
      super(props);
      this.state = {text:""}
    }

    render() {
        return (
            <div>
                <LayoutComponent leftSide={<LeftComponent  text={this.state.text}/>} rightSide={<RightComponent/>}/>
                <TextField id="text-field" label="Please input something" onChange={this.handleChange} />
            </div>
        );
    }

    handleChange=(e) =>{
        this.setState({text: e.target.value});
    }
}

export default App;