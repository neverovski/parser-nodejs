const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

const routes = require('./config/routes.js');

// Incorporate these routes into our app
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});