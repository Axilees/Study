import React,{Component} from "react";
import {Btn,PrimaryButton,SecondaryButton} from "./Buttons";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {primary:{margin: 10}};

@withStyles(styles)
class App extends Component {

    render(){
        return(
                <div>
                    <Btn secondary>This is primary!</Btn>
                    <br/>
                    <br/>
                        <PrimaryButton classNames={this.props.classes.primary}>More Primary!</PrimaryButton>
                        <SecondaryButton>More Secondary!</SecondaryButton>
                    </div>
        );
    }
}

export default App;
