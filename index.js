import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools' 

import typeDefs from './schemas'
import resolvers from './resolvers'
import { applyResultTransforms } from 'graphql-tools/dist/transforms/transforms';


const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})
const PORT = 3000;
 
const app = express();
 
// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql'})) 

app.listen(PORT, () => {
    console.log("Running GraphQL...")
});