import express from 'express';
import { graphqlHTTP } from "express-graphql";
import depthLimit from 'graphql-depth-limit';
import cors from 'cors';
import helmet from 'helmet';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import { join } from 'path';

import resolvers from './graphql/resolvers';
import rateLimiter from './middlewares/rateLimiter';
import { applyMiddleware } from 'graphql-middleware';
import permissions from './middlewares/shield';

const schemaWithoutResolvers = loadSchemaSync(join(__dirname, 'graphql/schema.graphql'), {
    loaders: [new GraphQLFileLoader()]
});

const schemaWithResolvers = addResolversToSchema({
    schema: schemaWithoutResolvers,
    resolvers
});

const schema = applyMiddleware(schemaWithResolvers, permissions);

const app = express();

//settings
app.set('port', process.env.PORT || 5000);
app.set('trust proxy', true)

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(rateLimiter);
app.use(graphqlUploadExpress({ maxFiles: 10 }));

app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    validationRules: [depthLimit(7)]
}));

export default app;