import React, {Component} from "react";
import Temp from "./Temp";

class App extends Component{
    render(){
        console.log('Render Executed!');
        return(
          <div className="App">
              <h1>Hi from REACT </h1>
              <button onClick={this.changeShowTemp}>CLOSE</button>
              {this.state.showTemp ? <Temp/> : null
              }
          </div>
        );
    }

    changeShowTemp() {
        this.setState(state => ({
            showTemp: !state.showTemp
        }));
    }

    constructor() {
        super();
        this.state = {showTemp: false};
        this.changeShowTemp = this.changeShowTemp.bind(this);
        console.log("Constructor executed!");
    }

    componentDidMount() {
        console.log("ComponentDidMount executed!");
    }

    componentWillMount() {
        console.log("ComponentWillMount executed!");
    }

    // componenDidUpdate() {
    //    console.log("ComponenDidUpdate executed!");
    // }

    componentWillUnmount() {
        console.log("ComponentWillUnmount executed!");
    }

    //  shouldComponentUpdate() {
    //     console.log("shouldComponentUpdate executed!");
    // }

    static getDerivedStateFromProps(state, props) {
        console.log("getDerivedStateFromProps executed!");
        return state;
    }

    //   getSnapshotBeforeUpdate() {
    //      console.log("getSnapshotBeforeUpdate executed!");
    // }

    // static  getDerivedStateFromError(state,props) {
    //    console.log("getDerivedStateFromError executed!");
    //   return state;
    // }

    //  componentDidCatch() {
    //     console.log("componentDidCatch executed!");
    // }

    //componentWillUpdate() {
    //   console.log("consoleWillUpdate executed!");
    // }

}

export default App;
