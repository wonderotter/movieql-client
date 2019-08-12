import React from 'react';
import client from './apolloClient';
import {ApolloProvider} from 'react-apollo';

class App extends React.Component {
  render(){
    return (
      <ApolloProvider client={client}>
      <div className="App"/>
      </ApolloProvider>
    );
  }
}

export default App;
