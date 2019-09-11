import React,{Component} from "react";
import {ThemeContext} from "./context/ThemeContext";
import Button from "@material-ui/core/Button";

class ContextButton extends Component{
 render(){
     let props = this.props;
     let theme = this.context;
     console.log(theme.color);
     return(
         <Button variant="contained" {...props} color = {theme.color}></Button>
     )
 }
}
ContextButton.contextType = ThemeContext;
export default ContextButton;
