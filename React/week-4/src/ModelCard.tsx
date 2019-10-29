import React, {Component} from "react";
import {createStyles, WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import {Model} from "./Model";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const modelStyles = () => createStyles({
   model: {
       margin: 20
   }
});
type Properties = {
   model: Model
};

type ModelProps = WithStyles<typeof modelStyles> & Properties;

class ModelCard extends Component<ModelProps> {

    render() {
        return(
            <Card className={this.props.classes.model}>
                <CardHeader
                     title = {this.props.model.name}
                     subheader = {this.props.model.faction}
                     />
             <CardContent>
                 <Typography variant="body2" color="textSecondary" component="p">
                     {this.props.model.description}
                 </Typography>
             </CardContent>
            </Card>
        );
    }
}

export default withStyles(modelStyles)(ModelCard);
