import React from "react";
import Axios from "axios";
import {Model} from "./Model";

const withData = (path: string) => <P extends object>(Component: React.ComponentType<P>) =>
  class extends React.Component<P, {models: Model[]}> {
    constructor(props: any) {
        super(props);
        this.state = {models: []};
        Axios.get<Model[]>(path).then((response) => {
            this.setState({models: response.data});
        });
    }

    render() {
        return(
          <Component data = {this.state.models} {...this.props as P}/>
        );
    }
  };
export default withData;

