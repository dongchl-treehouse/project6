const express = require('express');
const app = express();
const dataProjects = require('./data.json');

app.set('view engine','pug');
app.use(express.static('public'));

const mainRouter  = require('./router');
const aboutRouter = require('./router/about');
const indexRouter = require('./router/index');
const projectRouter = require('./router/project');

app.use(mainRouter);
app.use('/about', aboutRouter);
app.use('/index', indexRouter);
app.use('/project', projectRouter);

app.use( function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.listen(3000, function(){
    console.log('The application is running on localhost:3000!');
});