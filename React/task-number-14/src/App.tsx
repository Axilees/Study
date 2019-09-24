import React, {Component} from "react";
import withBluePaper from "./withBluePaper";
import TestSubject from "./TestSubject";
import withPicture from "./withPicture";

class App extends Component {
  render() {
      const BlueTestSubject  = withBluePaper(TestSubject);
      const PictureSubject = withPicture(BlueTestSubject);
      const sampleText: string = "Suda Dupa Fly!";
      return(
          <div>
              <PictureSubject text={sampleText}/>
          </div>
      );
  }
}

export default App;
