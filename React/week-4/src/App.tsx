import React, {Component} from "react";
import ModelsContainer from "./ModelsContainer";
import withData from "./withData";

class App extends Component {


  render() {
      const SuperContainer = withData("http://localhost:3002/models")(ModelsContainer);
      return(
          <div>
              <SuperContainer />
          </div>
      );
  }
}
export default App;
