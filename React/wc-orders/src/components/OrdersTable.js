import React, {Component, Fragment} from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {TableBody} from "@material-ui/core";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import {Link} from "react-router-dom";
import {createStyles, makeStyles} from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: 1000,
            marginLeft: 100,
            marginTop: 50,
            overflowX: 'auto',
        },
        table: {
            minWidth: 650,
        },
        progress: {
            margin: 20,
        },
    })
)


const Orders = () => (
    <Query query={
        gql`
            query OrderQuery($after: String) {
              orders(after: $after) {
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  orderId
                  total
                  status
                  billing {
                    firstName
                    lastName
                  }
                }
              }
            }
        `
    }>
        {
            ({loading, error, data}) => {
                if (loading) {
                    return (<TableRow>
                        <TableCell><CircularProgress/></TableCell>
                    </TableRow>);
                }
                console.log(data);
                console.log(error);
                if (error !== undefined) {
                    return (<TableRow>
                        <TableCell>
                            <h3>Error Occured!</h3>
                            <p>{JSON.stringify(error)}</p>
                        </TableCell>
                    </TableRow>);
                }
                return (<Fragment>{data.orders.nodes.map(order => {
                    return (
                        <TableRow key={order.orderId}>
                            <TableCell align="right"><Link
                                to={`/order/${order.orderId}`}>{order.orderId}</Link></TableCell>
                            <TableCell align="right">{order.billing.firstName}</TableCell>
                            <TableCell align="right">{order.billing.lastName}</TableCell>
                            <TableCell align="right">{order.total}</TableCell>
                            <TableCell align="right">{order.status}</TableCell>
                        </TableRow>)
                })}</Fragment>);
            }
        }
    </Query>
)

function OrdersTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Order No.</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Orders/>
                </TableBody>
            </Table>
        </Paper>
    );
}

export default OrdersTable;