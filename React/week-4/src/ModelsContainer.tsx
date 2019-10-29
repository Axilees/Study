import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {WithStyles} from "@material-ui/styles/withStyles/withStyles";
import {createStyles} from "@material-ui/core";
import {Model} from "./Model";
import ModelCard from "./ModelCard";

const superStyle = () => createStyles({
   root: {
     margin: 20,
       display: "flex"
}
});

type MCProps = {
    data: Model[];
}

type Props = WithStyles<typeof superStyle> & MCProps;

class ModelsContainer extends Component<Props> {

  render() {
      return(<div className={this.props.classes.root}>
              {this.props.data.map(model => <ModelCard model={model} />)}
             </div>);
  }
}

export default withStyles(superStyle)(ModelsContainer);
