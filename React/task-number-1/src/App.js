import React, {Component} from "react";
import Temp from "./Temp";
import Justice from "./Justice";

class App extends Component{
    render(){
        console.log('App Render Executed!');
        const msg = this.state.messages.map(m => <li>{m}</li>);
        return(
          <div className="App">
              <h1>Hi from REACT </h1>
              <button onClick={this.changeShowTemp}>SHOW TEMP</button>
              <br/><br/>
              <button onClick={this.changeShowJustice}>SHOW JUSTICE</button>
              <Temp showTemp={this.state.showTemp} callBackFunction={this.addMessage}/>
              <ul>
                  {(this.state.messages || []).map(m => (<li key={Math.random()}>{m}</li>))}
              </ul>
              {this.state.showJustice ? <Justice callBackFunction={this.addMessage}/> : null}

          </div>
        );
    }


    changeShowTemp = () => {
        this.setState(state => ({
            showTemp: !state.showTemp
        }));
    }

    changeShowJustice = () => {
        this.setState(state => ({
            showJustice: !state.showJustice
        }))
    }

    addMessage = (childData) => {
        this.setState(state => ({
            messages: state.messages.concat(childData)
        }))
    }

    constructor() {
        super();
        this.state = {
            showTemp: false,
            showJustice: false,
            messages: []
        };
        console.log("App Constructor executed!");
    }

    componentDidMount() {
        console.log("App ComponentDidMount executed!");
        this.addMessage("App ComponentDidMount executed!");
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
