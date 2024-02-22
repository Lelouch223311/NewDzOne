const express = require('express');
const messageRouter = express.Router()
const {
    getFriend,
    getFriends,
    postFriend
} = require('../controllers/friends.controller');

messageRouter.use((req, res, next) => {
    console.log("IP address: " + req.ip);
    next();
})

// messageRouter.post('/', postFriend) 
messageRouter.get('/', getFriendMessage);
messageRouter.get('/:friendId', getFriend);



module.exports = messageRouter;