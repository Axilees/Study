import React, {Component} from "react";

class Temp extends Component {

    constructor(props) {
        super();
        console.log('Temp Constructor  Executed! ' + props.testProp);
        props.callBackFunction('Temp Constructor  Executed!');
        this.handleChange = this.handleChange.bind(this);
        this.state = {inputVar: "", showTemp: false};
    }

    handleChange(event) {
        this.setState({inputVar: event.target.value});
    };

    render() {
        console.log('Temp Render Executed!');
        return (
            <div style={{display: this.state.showTemp ? 'block' : 'none'}}>
                <h2>This is test!</h2>
                <input type="text" value={this.state.inputVar} onChange={this.handleChange}/>
            </div>
        )
            ;
    }

    componentDidMount() {
        console.log("Temp ComponentDidMount executed!");
        this.props.callBackFunction('Temp ComponentDidMount  Executed!');
    }

    componentWillUnmount() {
        this.props.callBackFunction("Temp ComponentWillUnmount executed!");
        console.log("Temp ComponentWillUnmount executed!");
    }

    static getDerivedStateFromProps(state, props) {
        console.log("Temp getDerivedStateFromProps executed!");
        return state;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Temp getSnapshotBeforeUpdate executed!");
        return prevState;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Temp ComponenDidUpdate executed! " + JSON.stringify(prevState));
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Temp shouldComponentUpdate executed!" + nextProps);
        return true;
    }

    //  UNSAFE_componentWillReceiveProps(props){
    //     console.log("Temp componentWillReceiveProps executed! "+ JSON.stringify(props));

    //}
}

export default Temp;
