//const {ApolloServer, PubSub} = require('apollo-server');
const { ApolloServer, PubSub } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const {MONGODB} = require('./config');

//const bodyParser = require('body-parser');

const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


const pubsub = new PubSub();

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub})
});


app.use(express.static('public'));
app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


server.applyMiddleware({
    //path: '/my-frontend', // you should change this to whatever you want
    app,
    cors: {
        credentials: true,
        origin: 'http://localhost:3000'
    }
});




mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('MongoDB Connected');

    console.log('PORT = '+ PORT);

    //return app.listen({port:PORT});

    return app.listen(PORT, ()=>{console.log(`Server started on port ${PORT} graphqlPath ${server.graphqlPath}`)});
})
.then(res => {
    console.log(`Server running at ${res.url}`);
})
.catch(err => {console.error(err)});