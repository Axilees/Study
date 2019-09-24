import React, {Component} from "react";
const  logo = require( "../assets/M3E_Outcasts_Box_Icon.png");

const withPicture = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return class extends Component {
        render() {
            return(
               <React.Fragment>
                   <img src={require( "../assets/M3E_Outcasts_Box_Icon.png")}></img>
                   <WrappedComponent {...this.props as P}/>
               </React.Fragment>
            );
        }
    };
};

export default withPicture;
