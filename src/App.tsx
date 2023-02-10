import React from 'react';
import MyLayout from './layout';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://test.com',
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