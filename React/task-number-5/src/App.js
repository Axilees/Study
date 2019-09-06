import React, {Component, Fragment} from "react";
import PictureSlider from "./pictures/PictureSlider";
import Picture from "./pictures/Picture";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {sliderValue: 0}
    }

    sliderChange = (event, value) => {
        this.setState(state => ({
            sliderValue: value,
        }))
    };

    render() {
        return (
            <Fragment>
                <PictureSlider sliderChange={this.sliderChange}/>
                <Picture value={this.state.sliderValue}/>
            </Fragment>
        )
    }
}

export default App;
