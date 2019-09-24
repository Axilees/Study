import React, {Component} from "react";
// @ts-ignore
import styled from "styled-components";
import SuperForm from "./SuperForm";

const TestComponent = styled.div`
  background-color: yellow;
  width:300px;
  margin: 30px;
`;

class App extends Component<{}, {}> {

    render() {
        return (
            <div>
                <TestComponent>
                    <h1>Test</h1>
                </TestComponent>
                <SuperForm title = "Supa Dupa Fly!!!"/>
            </div>
        );
    }

}

export default App;