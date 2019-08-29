import React, {Component} from "react";
import Temp from "./Temp";

class App extends Component{
    render(){
        return(
          <div className="App">
              <h1>Hi from REACT </h1>
              <Temp/>
          </div>
        );
    }

    constructor() {
        super();
        console.log("Constructor executed!");
    }

    componentDidMount() {
        console.log("ComponentDidMount executed!");
    }

    componentWillMount() {
        console.log("ComponentWillMount executed!");
    }

    componenDidUpdate() {
        console.log("ComponentDidMount executed!");
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount executed!");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate executed!");
    }

    getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps executed!");
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate executed!");
    }

    //  getDerivedStateFromError() {
    //     console.log("getDerivedStateFromError executed!");
    // }

    componentDidCatch() {
        console.log("componentDidCatch executed!");
    }

    componentWillUpdate() {
        console.log("consoleWillUpdate executed!");
    }

}

export default App;
