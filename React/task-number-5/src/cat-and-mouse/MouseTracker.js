import React, {Component} from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";

class MouseTracker extends Component {
    render() {
        return (
            <div>
                <h1>Move Mouse Around!!!</h1>
                <Mouse render={this.renderChild}/>
            </div>
        );
    }

    renderChild = (mouse) => {
        return (
            <Cat mouse={mouse}/>
        )
    }
}

export default MouseTracker;
