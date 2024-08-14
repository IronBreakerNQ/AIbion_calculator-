const InputDataMartlock = require('../moduls/InputDataMartlock');
class BridgewatchControllers{
    //[Get] Martlock/get
    GetData = async(req,res,next) =>{
        const data = await InputDataMartlock.hide_T3();
        res.json(data);
    }
}

module.exports = new BridgewatchControllers;