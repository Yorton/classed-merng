//const {ApolloServer, PubSub} = require('apollo-server');
const { ApolloServer, PubSub } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config');

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('client/public'));
app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
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
    // return app.listen({port:PORT},  () => {
    //     console.log(`Server ready at http://localhost:${PORT}`);
    // });

    console.log('PORT = '+ PORT);

    return app.listen(PORT, ()=>{console.log('Server started on port ${PORT}')});
})
.then(res => {
    console.log(`Server running at ${res.url}`);
})
.catch(err => {console.error(err)});