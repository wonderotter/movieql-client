import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';

class App extends React.Component {
  render(){
    return (
      <Router basename="/">
        <ApolloProvider client={client}>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
