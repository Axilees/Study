import React, {Component, Fragment} from "react";
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter, Route} from 'react-router-dom';
import OrdersTable from "./components/OrdersTable";
import Login from "./components/Login";
import Order from "./components/Order";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import {ApolloLink} from "apollo-link";

const cache = new InMemoryCache();
console.log('init!');

const httpLink = new HttpLink({uri: 'http://localhost/woodemo/graphql'});
const authLink = new ApolloLink((operation, forward) => {
    const token = sessionStorage.getItem('token');

    operation.setContext({
        headers: {
            authorization: token ? token : ''
        }
    });

    return forward(operation);
});

const client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
});

cache.writeData({
    data: {
        isLoggedIn: !!sessionStorage.getItem('token')
    }
})

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn{
        isLoggedIn @client
    }
`;

function IsLoggedIn() {
    const {data} = useQuery(IS_LOGGED_IN);
    return data.isLoggedIn ? <Route exact path="/" component={OrdersTable}/>
        : <Route exact path="/" component={Login}/>;
}

function App() {

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <IsLoggedIn/>
                <Route path="/order/:orderId" component={Order}/>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;