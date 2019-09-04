import React, {Component} from "react";

class Pig extends Component{

    constructor(props){
        super(props);
    }

    render() {
       return(<li key={this.props.id}>{this.props.name}</li>);
    }

}
export default Pig;