const siteRouter = require('./site');

const martlock = require('./Martlock');
const bridgewatch = require('./Bridgewatch');
const lym = require('./Lym');
const fortSterling = require('./FortSterling');
const material = require('./Material');

function route(app){

    app.use('/Martlock',martlock);
    app.use('/Bridgewatch',bridgewatch);  
    app.use('/Lym',lym);  
    app.use('/FortSterling',fortSterling);  
    app.use('/Material',material);  

    app.use('/',siteRouter);
    
}

module.exports = route;