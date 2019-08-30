import React, {Component} from "react";


class Temp extends Component {

    constructor(props) {
        super();
        console.log('Temp Constructor  Executed! '+ props.testProp);
        this.state = {};
    }

    render() {
        console.log('Temp Render Executed!');
        return (
            <h2>This is test!</h2>
            <input>
        );
    }

    componentDidMount() {
        console.log("Temp ComponentDidMount executed!");
    }

    componentWillUnmount() {
        console.log("Temp ComponentWillUnmount executed!");
    }

    static getDerivedStateFromProps(state, props) {
        console.log("Temp getDerivedStateFromProps executed! ");
        return state;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Temp getSnapshotBeforeUpdate executed!");
        return prevState;
    }

    componentDidUpdate(prevProps,PrevState, snapshot) {
        console.log("Temp ComponenDidUpdate executed! "+ JSON.stringify(prevProps));
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("App shouldComponentUpdate executed!" +nextProps);
        return true;
    }

  //  UNSAFE_componentWillReceiveProps(props){
   //     console.log("Temp componentWillReceiveProps executed! "+ JSON.stringify(props));

    //}
}

export default Temp;
