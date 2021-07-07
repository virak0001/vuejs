const express = require('express');
const app = express();
app.use(express.json())

let serverPort = 5000;
app.listen(serverPort, (err) => {
    if(!err){
        console.log("Server run at host:" + serverPort)
    }
})

const PostRoute = require('./Route/PostRoute');
app.use('/posts', PostRoute)