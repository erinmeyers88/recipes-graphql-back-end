import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';

const app = express();
const port = 8080;

mongoose.connect('mongodb://test123:test123@ds131313.mlab.com:31313/recipes');
const db = mongoose.connection;
db.on('error', () => console.log('Failed to connect to database.'))
  .once('open', () => console.log('Connected to database.'));

app.get('/', (req, res) => {
  res.send('Recipe GraphQL API');
});

// GraphQL API endpoint

app.use('/graphql', cors(), graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})));

app.listen(port, () => {
  console.log('GraphQL API running at port: ', port);
});
