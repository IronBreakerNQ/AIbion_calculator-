const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TFFarmSchema = new Schema({
    name: { type: String},
    sellOrder:{
            city: { type: String },
            price: { type: Number },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    },
    buyOrder: {
            city: { type: String },
            price: { type: Number },
            fiveAvg:{type:Number},
            tenAvg:{type:Number},
            lastUpdate: {type: String},
    }
});

const TFFarm = mongoose.model('TFFarm', TFFarmSchema);

module.exports =TFFarm;
