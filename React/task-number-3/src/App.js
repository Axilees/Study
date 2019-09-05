import React, {Component} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableHeader from './TableHeader';
import TabBody from './TableBody';
import Table from "@material-ui/core/Table";
import {Paper} from "@material-ui/core";

const piggyStyle = makeStyles(theme => ({
    root: {
        width: '50%',
        marginTop: theme.spacing(3),
        overflowX: 'auto'
    },
    table: {
        minWidth: 650,
    }
}));

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pigs: [
                {id: 1, name: 'Old Major', desc: 'Cruel one'},
                {id: 2, name: 'Gracie', desc: 'Sexy one'},
                {id: 3, name: 'The Sow', desc: 'Kind one'},
                {id: 4, name: 'War Pig', desc: 'Mad one'},
                {id: 5, name: 'Wild Boar', desc: 'Wild one'},
                {id: 6, name: 'Squealer', desc: 'Wise One'},
                {id: 7, name: 'Piglet', desc: 'Small one'},
            ]
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHeader/>
                        <TabBody pigs={this.state.pigs}/>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default withStyles(piggyStyle)(App);

