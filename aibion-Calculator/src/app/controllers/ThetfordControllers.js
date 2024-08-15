const InputDataThetford = require('../moduls/InputDataThetford');

const {mutipleMongooseToObject} = require('../../util/mongoose');

const TFFarm = require('../models/Thetford/TFFarm');
const TFCraft = require('../models/Thetford/TFCraft');

const MTRefine = require('../models/Material/MTRefine');
const MTRaw = require('../models/Material/MTRaw');


class ThetfordControllers{

    //[Get] /Thetford/get
    GetData = async (req, res, next) => {
        try {
            //farming
            const [T2_AGARIC, T5_CABBAGE, T7_MULLEIN ] = await Promise.all([
                InputDataThetford.T2_AGARIC(),
                InputDataThetford.T5_CABBAGE(),
                InputDataThetford.T7_MULLEIN(),
                
            ]);

            
            const dataFarm= {
                T2_AGARIC,
                T5_CABBAGE,
                T7_MULLEIN,
            };
            
            await TFFarm.deleteMany({});
            const dataFarmDb= await Promise.all(Object.values(dataFarm).map(async (item) => {
                // Chuyển đổi giá trị giá từ chuỗi thành số
                if (item.sellOrder && item.sellOrder.price) {
                    item.sellOrder.price = parseFloat(item.sellOrder.price.replace(/,/g, '')) || 0;
                }
                if (item.buyOrder && item.buyOrder.price) {
                    item.buyOrder.price = parseFloat(item.buyOrder.price.replace(/,/g, '')) || 0;
                }

                // Tính toán giá trung bình
                if (item.sellOrder) {
                    item.sellOrder.fiveAvg = item.sellOrder.price * 0.95;
                    item.sellOrder.tenAvg = item.sellOrder.price * 0.90;
                }
                if (item.buyOrder) {
                    item.buyOrder.fiveAvg = item.buyOrder.price * 0.95;
                    item.buyOrder.tenAvg = item.buyOrder.price * 0.90;
                }

                // Tạo bản ghi mới
                return await TFFarm.create(item);
            }));

              //crafting

              const [
                item1, item2, item3, 
                item4, item5, item6, 
                item7, item8, item9, 
     
                item10, item11, item12, 
                item13, item14, item15, 
                item16, item17, item18, 

                item19, item20, item21, 
                item22, item23, item24, 
                item25, item26, item27, 

                item28, item29, item30, 
                item31, item32, item33, 
                item34, item35, item36, 

                item37, item38, item39, 
                item40, item41, item42, 
                item43, item44, item45, 
            
            ] = await Promise.all([
                InputDataThetford.T5_MAIN_MACE(),
                InputDataThetford.T5_MAIN_MACE1(),
                InputDataThetford.T6_MAIN_MACE(),

                InputDataThetford.T5_2H_MACE(),
                InputDataThetford.T5_2H_MACE1(),
                InputDataThetford.T6_2H_MACE(),

                InputDataThetford.T5_2H_FLAIL(),
                InputDataThetford.T5_2H_FLAIL1(),
                InputDataThetford.T6_2H_FLAIL(),

                InputDataThetford.T5_MAIN_NATURESTAFF(),
                InputDataThetford.T5_MAIN_NATURESTAFF1(),
                InputDataThetford.T6_MAIN_NATURESTAFF(),

                InputDataThetford.T5_2H_WILDSTAFF(),
                InputDataThetford.T5_2H_WILDSTAFF1(),
                InputDataThetford.T6_2H_WILDSTAFF(),

                InputDataThetford.T5_2H_NATURESTAFF(),
                InputDataThetford.T5_2H_NATURESTAFF1(),
                InputDataThetford.T6_2H_NATURESTAFF(),

                InputDataThetford.T5_MAIN_FIRESTAFF(),
                InputDataThetford.T5_MAIN_FIRESTAFF1(),
                InputDataThetford.T6_MAIN_FIRESTAFF(),

                InputDataThetford.T5_2H_INFERNOSTAFF(),
                InputDataThetford.T5_2H_INFERNOSTAFF1(),
                InputDataThetford.T6_2H_INFERNOSTAFF(),
                
                InputDataThetford.T5_2H_FIRESTAFF(),
                InputDataThetford.T5_2H_FIRESTAFF1(),
                InputDataThetford.T6_2H_FIRESTAFF(),
                
                InputDataThetford.T5_ARMOR_LEATHER_SET1(),
                InputDataThetford.T5_ARMOR_LEATHER_SET11(),
                InputDataThetford.T6_ARMOR_LEATHER_SET1(),

                InputDataThetford.T5_ARMOR_LEATHER_SET2(),
                InputDataThetford.T5_ARMOR_LEATHER_SET21(),
                InputDataThetford.T6_ARMOR_LEATHER_SET2(),

                InputDataThetford.T5_ARMOR_LEATHER_SET3(),
                InputDataThetford.T5_ARMOR_LEATHER_SET31(),
                InputDataThetford.T6_ARMOR_LEATHER_SET3(),

                InputDataThetford.T5_HEAD_CLOTH_SET1(),
                InputDataThetford.T5_HEAD_CLOTH_SET11(),
                InputDataThetford.T6_HEAD_CLOTH_SET1(),

                InputDataThetford.T5_HEAD_CLOTH_SET2(),
                InputDataThetford.T5_HEAD_CLOTH_SET21(),
                InputDataThetford.T6_HEAD_CLOTH_SET2(),

                InputDataThetford.T5_HEAD_CLOTH_SET3(),
                InputDataThetford.T5_HEAD_CLOTH_SET31(),
                InputDataThetford.T6_HEAD_CLOTH_SET3(),
                
            ]);

            const dataCraft= {
                item1, item2, item3, 
                item4, item5, item6, 
                item7, item8, item9, 
     
                item10, item11, item12, 
                item13, item14, item15, 
                item16, item17, item18, 

                item19, item20, item21, 
                item22, item23, item24, 
                item25, item26, item27, 

                item28, item29, item30, 
                item31, item32, item33, 
                item34, item35, item36, 

                item37, item38, item39, 
                item40, item41, item42, 
                item43, item44, item45, 
            
            };

            await TFCraft.deleteMany({});
            const dataRcraftdb = await Promise.all(Object.values(dataCraft).map(async (item) => {
                // Chuyển đổi giá trị giá từ chuỗi thành số
                if (item.sellOrder && item.sellOrder.price) {
                    item.sellOrder.price = parseFloat(item.sellOrder.price.replace(/,/g, '')) || 0;
                }
                if (item.buyOrder && item.buyOrder.price) {
                    item.buyOrder.price = parseFloat(item.buyOrder.price.replace(/,/g, '')) || 0;
                }

                // Tính toán giá trung bình
                if (item.sellOrder) {
                    item.sellOrder.fiveAvg = item.sellOrder.price * 0.95;
                    item.sellOrder.tenAvg = item.sellOrder.price * 0.90;
                }
                if (item.buyOrder) {
                    item.buyOrder.fiveAvg = item.buyOrder.price * 0.95;
                    item.buyOrder.tenAvg = item.buyOrder.price * 0.90;
                }
                // Tạo bản ghi mới
                return await TFCraft.create(item);
            }));


            res.json({dataFarmDb,dataRcraftdb});


        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Thetford/TFFarm
    TFFarm = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataFarm = await TFFarm.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataFarm = mutipleMongooseToObject(dataFarm);

            // Gửi dữ liệu vào view
            res.render("ThetfordFarm", {
                farms: transformedDataFarm,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Thetford/TFRefine
   TFRefine = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataRaw = await MTRaw.find({name : /FIBER/});
            const dataRefime = await MTRefine.find({ name: /METALBAR/ });

            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataRaw = mutipleMongooseToObject(dataRaw);
            const transformedDataRefime= mutipleMongooseToObject(dataRefime);
            // Gửi dữ liệu vào view
            res.render("ThetfordRefine", {
                raws: transformedDataRaw,
                refine: transformedDataRefime,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Thetford/TFCraft
    TFCraft = async (req,res,next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataCraft = await TFCraft.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataCraft= mutipleMongooseToObject(dataCraft);
            // Gửi dữ liệu vào view
            res.render("ThetfordCraft", {
                craft: transformedDataCraft,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

}
module.exports = new ThetfordControllers;