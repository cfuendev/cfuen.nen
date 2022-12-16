const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// Setup nunjucks templating engine
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('port', process.env.PORT || 3000);
app.use(express.static('./views/styles'))

// Home page
app.get('/', function(req, res) {
    res.render('index.njk', {
        page: 'home',
        port: app.get('port'),
        year: new Date().getFullYear()
    });
});

// Other example
app.get('/example', function(req, res) {
    res.render('example.njk', {
        page: 'example',
        port: app.get('port')
    });
});

// Kick start our server
app.listen(app.get('port'), function() {
    console.log('Server started on port', app.get('port'));
});
