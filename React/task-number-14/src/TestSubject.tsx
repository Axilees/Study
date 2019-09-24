import React, {Component} from "react";

class TestSubject extends Component<{text: string}> {
    render() {
        return (
            <div>
             <h1>This is Test Subject</h1>
             <h2>{this.props.text}</h2>
            </div>

    );
    }
}

export default TestSubject;
