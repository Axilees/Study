import React, {Component} from "react";
import OutcastCard from "./OutcastCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

const defaultStyles = makeStyles({
    card: {
        width: 400,
        marginLeft: '45%',
        color: 'yellow',
    },
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {variant: "h5", component: "h2", styles: defaultStyles, faction: "Ауткасты"}

    }

    setToGremlins = () => {
        this.setState(state => ({
            variant: "h6",
            component: "h1",
            faction: "Гремлины",
            styles: makeStyles({
                card: {
                    width: 400,
                    marginLeft: '45%',
                    color: 'orange',
                },
            })
        }));
    }

    render() {
        return (
            <div>
                <h1>THIS IS APP!</h1>
                <Button variant="contained" color="primary" onClick={this.setToGremlins}>Gremlin Button </Button>
                <OutcastCard faction={this.state.faction} styles={this.state.styles} variant={this.state.variant}
                             component={this.state.component}/>
            </div>
        )
    }
}

export default App;
