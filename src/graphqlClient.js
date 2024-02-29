import {GraphQLClient} from 'graphql-request';
const apiKey=process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;
const url='https://nazilli.stepzen.net/api/early-boxer/__graphql';
const client=new GraphQLClient(url, { 
    headers:{
        Authorization: `apikey ${apiKey}`,

    },
});

export default client;
