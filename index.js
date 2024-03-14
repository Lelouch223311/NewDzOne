const express = require('express');
const path = require('path');
const friendsRouter = require('./routers/friends.router.js')
const usersRouter = require('./routers/users.router.js')

//!DELETE!!
// const { sequelize } = require('./db.js')


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const PORT = 4000;




app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})
app.use('/friends', friendsRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
    res.render('index', {
        title: 'Friends App',
        caption: 'Mountains are awesome!'
    });
});



app.get('/photo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'img.jpg'));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})