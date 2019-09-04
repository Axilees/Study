import React, {Component} from "react";
import Pig from './Pig';

class App extends Component {

    constructor(props){
       super(props);
       this.state = {
          pigs:[
              {id: 1 , name: 'Old Major', desc: 'Cruel one'},
              {id: 2 , name: 'Gracie', desc: 'Sexy one'},
              {id: 3 , name: 'The Sow', desc: 'Kind one'},
              {id: 4 , name: 'War Pig', desc: 'Mad one'},
              {id: 5 , name: 'Wild Boar', desc: 'Wild one'},
              {id: 6, name: 'Squealer', desc: 'Wise One'},
              {id: 7 , name: 'Piglet', desc: 'Small one'},
          ]
       }
    }

    render(){
        return(
            <div>
                <h1>Pigs!!!</h1>
                <ul>
                    {this.state.pigs.map(({id, ...details}) => (
                      <Pig key={id} {...details}></Pig>
                          ))}
                </ul>
            </div>
        );
    }
}

export default App;
    ""