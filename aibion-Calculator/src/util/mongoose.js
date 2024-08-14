module.exports = {
    mutipleMongooseToObject: function(mongooseArrays){
       return mongooseArrays.map(mongooseArray => mongooseArray.toObject())
    },
    MongooseToObject : function(mongooseArrays){
        return mongooseArrays ? mongooseArrays.toObject() : mongooseArrays;
    }
}