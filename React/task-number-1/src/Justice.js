import React, {Component} from 'react';
import justice from "../assets/M3E_LadyJustice.jpg";

class Justice extends Component {

    constructor(props) {
        super();
        console.log('Justice Constructor  Executed! ' + props.testProp);
        props.callBackFunction('Justice Constructor  Executed!');
        this.state = {};
    }


    render() {
        console.log('Justice Render Executed!');
        return (
            <div>
                <img src={justice}/>
            </div>
        )
            ;
    }

    componentDidMount() {
        console.log("Justice ComponentDidMount executed!");
        this.props.callBackFunction('Justice ComponentDidMount  Executed!');
    }

    componentWillUnmount() {
        this.props.callBackFunction("Justice ComponentWillUnmount executed!");
        console.log("Justice ComponentWillUnmount executed!");
    }

    static getDerivedStateFromProps(state, props) {
        console.log("Justice getDerivedStateFromProps executed! ");
        return state;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Justice getSnapshotBeforeUpdate executed!");
        return prevState;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Justice ComponenDidUpdate executed! " + JSON.stringify(prevState));
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Justice shouldComponentUpdate executed!" + nextProps);
        return true;
    }
}

export default Justice;