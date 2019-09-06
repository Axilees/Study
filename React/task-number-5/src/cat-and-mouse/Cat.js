import React, {Component} from "react";
import cat from "../../assets/cat.png";

class Cat extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={cat} style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
        )
    }
}

export default Cat;
