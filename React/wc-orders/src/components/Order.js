import React, {Component, Fragment} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {TableBody} from "@material-ui/core";
import Loading from "./Loading";
import {createStyles, makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            width: 600,
            marginLeft: 100,
            marginTop: 50,
            overflowX: 'auto',
        },
        table: {
            maxWidth: 550,
        },
        title: {
            fontSize: 14,
        },
    })
);

function Order(props) {
    const classes = useStyles();
    const order = props.data.orderBy;
    if (!order) {
        return (<Loading/>)
    }

    const navigateBack =() =>{
        props.history.push('/');
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                title={"Order Id: " + order.orderId}
                subheader={order.billing.firstName + order.billing.lastName}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {"Status: " + order.status}
                </Typography>
                <Typography>
                    {"Total: " + order.total}
                </Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">SKU</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.lineItems.nodes.map(item => {
                            return (
                                <TableRow key={item.product.sku}>
                                    <TableCell align="right">{item.product.sku}</TableCell>
                                    <TableCell align="right">{item.product.name}</TableCell>
                                    <TableCell align="right">{item.quantity}</TableCell>
                                    <TableCell align="right">{item.total}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={navigateBack}>Return</Button>
            </CardActions>
        </Card>);
}

const GetOrderById = gql`
    query GetOrderById($orderId: Int) {
        orderBy(orderId: $orderId) {
            orderId
            total
            status
            billing {
                firstName
                lastName
            }
            lineItems {
                nodes {
                    quantity
                    total
                    product {
                        name
                        sku
                    }
                }
            }
        }
    }
`;


export default graphql(GetOrderById, {
    options: (props) => {
        const orderId = props.match.params.orderId;
        return {
            variables: {
                orderId
            }
        }
    }
})(Order);