const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const app = express();
const routes = require('./routes');

// Designate our public folder as a static directory
app.use(express.static(__dirname + '/public'));

// connect Handlebars to our Express app
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// Incorporate these routes into our app
app.use('/', routes);
app.use('/ebay', routes);

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        console.log('something bad happened', err);
        return;
    }
    console.log(`server is listening on ${port}`);
});
