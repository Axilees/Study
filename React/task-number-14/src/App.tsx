import React, {Component} from "react";
import withBluePaper from "./withBluePaper";
import TestSubject from "./TestSubject";
import withPicture from "./withPicture";
import * as R from "ramda";

class App extends Component {
    render() {
        const PictureSubject = R.compose(withPicture, withBluePaper)(TestSubject);
        const sampleText: string = "Suda Dupa Fly!";
        return (
            <div>
                <PictureSubject text={sampleText}/>
            </div>
        );
    }
}

export default App;
