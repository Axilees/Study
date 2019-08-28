import React, {Component} from "react";
import "./App.scss";
import viks from "../assets/2560x1440_M2E_masters_outcast-viktorias.png";

class App extends Component{
    render(){
        return(
            <div className = "App">
             <h1> Sex,Drugs And Rock And Roll!</h1>
                <div className="imgSrc">
                    <img src={viks}/>
                </div>
            </div>
        );
    }
}

export default App;
