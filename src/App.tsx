import React from 'react';
import MyLayout from './layout';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { URL } from 'api/config';

const client = new ApolloClient({
    uri: URL,
    cache: new InMemoryCache()
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <MyLayout />
        </ApolloProvider>
    );
};

export default App;