const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');


const express = require('express');
const app = express();
const port = 3001;

//static file
app.use(express.static(path.join(__dirname, 'public')));

//db connect
const db = require('./config/db/index')
db.connect();

//HTTP logger
app.use(morgan('combined'))


// Template engine
app.engine('hbs', engine({
    extname:".hbs",
    helpers:{
        sum : (a,b) => a+b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


//use routes
const route = require('./routes');
route(app);


app.listen(port, () => { console.log(`App listening on port http://localhost:${port}`) });


