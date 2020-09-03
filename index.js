const {ApolloServer, PubSub} = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config');

const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const pubsub = new PubSub();

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub})
});

server.applyMiddleware({
    path: '/my-frontend', // you should change this to whatever you want
    app,
});


mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('MongoDB Connected');
    return server.listen({port:PORT});
})
.then(res => {
    console.log(`Server running at ${res.url}`);
})
.catch(err => {console.error(err)});