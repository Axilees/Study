import React, {Component} from "react";
import Temp from "./Temp";

class App extends Component{
    render(){
        console.log('App Render Executed!');
        return(
          <div className="App">
              <h1>Hi from REACT </h1>
              <button onClick={this.changeShowTemp}>CLOSE</button>
              {this.state.showTemp ? <Temp testProp = { 2 + 2 }/> : null
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
        console.log("App Constructor executed!");
    }

    componentDidMount() {
        console.log("App ComponentDidMount executed!");
    }

  //  componentWillMount() {
   //     console.log("ComponentWillMount executed!");
   // }

     componentDidUpdate(prevProps,PrevState, snapshot) {
        console.log("App ComponenDidUpdate executed! "+ JSON.stringify(snapshot));
     }

    componentWillUnmount() {
        console.log("App ComponentWillUnmount executed!");
    }

      shouldComponentUpdate(nextProps, nextState) {
         console.log("App shouldComponentUpdate executed!");
         return true;
     }

    static getDerivedStateFromProps(state, props) {
        console.log("App getDerivedStateFromProps executed!");
        return state;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
          console.log("App getSnapshotBeforeUpdate executed!");
          return {message:"SNAPSHOT!!!!"};
     }

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
