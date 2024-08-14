const InputDataBridgewatch = require('../moduls/InputDataBridgewatch');

const {mutipleMongooseToObject} = require('../../util/mongoose');

const MTRaw = require('../models/Material/MTRaw');
const BWFarm = require('../models/Bridgewatch/BWFarm');
const MTRefine = require('../models/Material/MTRefine');
const BWCraft = require('../models/Bridgewatch/BWCraft');

class BridgewatchControllers {
    //[Get] /Bridgewatch/get
    GetData = async (req, res, next) => {
        try {
            //raw
            const [hidet3, hidet4, hidet5, hidet6, hidet7, hidet8 ] = await Promise.all([
                InputDataBridgewatch.hide_T3(),
                InputDataBridgewatch.hide_T4(),
                InputDataBridgewatch.hide_T5(),
                InputDataBridgewatch.hide_T6(),
                InputDataBridgewatch.hide_T7(),
                InputDataBridgewatch.hide_T8()
                
            ]);

            const dataRaw = {
                hidet3,
                hidet4,
                hidet5,
                hidet6,
                hidet7,
                hidet8
            };

            await MTRaw.deleteMany({});

            const dataRawdb = await Promise.all(Object.values(dataRaw).map(async (item) => {
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
                return await MTRaw.create(item);
            }));
            
            //farming
            const [T2_BEAN, T4_MILK, T5_TEASEL, T7_CORN ] = await Promise.all([
                InputDataBridgewatch.T2_BEAN(),
                InputDataBridgewatch.T4_MILK(),
                InputDataBridgewatch.T5_TEASEL(),
                InputDataBridgewatch.T7_CORN(),
                
            ]);

            
            const dataFarm= {
                T2_BEAN,
                T4_MILK,
                T5_TEASEL,
                T7_CORN,
            };
            
            await BWFarm.deleteMany({});
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
                return await BWFarm.create(item);
            }));

            //craft
            const [
                T5_2H_CROSSBOWLARGE, T5_2H_CROSSBOWLARGE1, T6_2H_CROSSBOWLARGE, 
                T5_2H_CROSSBOW, T5_2H_CROSSBOW1, T6_2H_CROSSBOW,
                T5_MAIN_1HCROSSBOW, T5_MAIN_1HCROSSBOW1, T6_MAIN_1HCROSSBOW,
     
                T5_MAIN_DAGGER, T5_MAIN_DAGGER1, T6_MAIN_DAGGER,
                T5_2H_DAGGERPAIR, T5_2H_DAGGERPAIR1, T6_2H_DAGGERPAIR,
                T5_2H_CLAWPAIR, T5_2H_CLAWPAIR1, T6_2H_CLAWPAIR,

                T5_2H_CURSEDSTAFF, T5_2H_CURSEDSTAFF1, T6_2H_CURSEDSTAFF,
                T5_2H_DEMONICSTAFF, T5_2H_DEMONICSTAFF1, T6_2H_DEMONICSTAFF,
                T5_MAIN_CURSEDSTAFF, T5_MAIN_CURSEDSTAFF1, T6_MAIN_CURSEDSTAFF,

                T5_ARMOR_PLATE_SET3, T5_ARMOR_PLATE_SET31, T6_ARMOR_PLATE_SET3,
                T5_ARMOR_PLATE_SET2, T5_ARMOR_PLATE_SET21, T6_ARMOR_PLATE_SET2,
                T5_ARMOR_PLATE_SET1, T5_ARMOR_PLATE_SET11, T6_ARMOR_PLATE_SET1,

                T5_SHOES_CLOTH_SET3, T5_SHOES_CLOTH_SET31, T6_SHOES_CLOTH_SET3,
                T5_SHOES_CLOTH_SET2, T5_SHOES_CLOTH_SET21, T6_SHOES_CLOTH_SET2,
                T5_SHOES_CLOTH_SET1, T5_SHOES_CLOTH_SET11, T6_SHOES_CLOTH_SET1,
            
            ] = await Promise.all([
                InputDataBridgewatch.T5_2H_CROSSBOWLARGE(),
                InputDataBridgewatch.T5_2H_CROSSBOWLARGE1(),
                InputDataBridgewatch.T6_2H_CROSSBOWLARGE(),

                InputDataBridgewatch.T5_2H_CROSSBOW(),
                InputDataBridgewatch.T5_2H_CROSSBOW1(),
                InputDataBridgewatch.T6_2H_CROSSBOW(),

                InputDataBridgewatch.T5_MAIN_1HCROSSBOW(),
                InputDataBridgewatch.T5_MAIN_1HCROSSBOW1(),
                InputDataBridgewatch.T6_MAIN_1HCROSSBOW(),

                InputDataBridgewatch.T5_MAIN_DAGGER(),
                InputDataBridgewatch.T5_MAIN_DAGGER1(),
                InputDataBridgewatch.T6_MAIN_DAGGER(),

                InputDataBridgewatch.T5_2H_DAGGERPAIR(),
                InputDataBridgewatch.T5_2H_DAGGERPAIR1(),
                InputDataBridgewatch.T6_2H_DAGGERPAIR(),

                InputDataBridgewatch.T5_2H_CLAWPAIR(),
                InputDataBridgewatch.T5_2H_CLAWPAIR1(),
                InputDataBridgewatch.T6_2H_CLAWPAIR(),

                InputDataBridgewatch.T5_2H_CURSEDSTAFF(),
                InputDataBridgewatch.T5_2H_CURSEDSTAFF1(),
                InputDataBridgewatch.T6_2H_CURSEDSTAFF(),
                
                InputDataBridgewatch.T5_2H_DEMONICSTAFF(),
                InputDataBridgewatch.T5_2H_DEMONICSTAFF1(),
                InputDataBridgewatch.T6_2H_DEMONICSTAFF(),
                
                InputDataBridgewatch.T5_MAIN_CURSEDSTAFF(),
                InputDataBridgewatch.T5_MAIN_CURSEDSTAFF1(),
                InputDataBridgewatch.T6_MAIN_CURSEDSTAFF(),

                InputDataBridgewatch.T5_ARMOR_PLATE_SET3(),
                InputDataBridgewatch.T5_ARMOR_PLATE_SET31(),
                InputDataBridgewatch.T6_ARMOR_PLATE_SET3(),

                InputDataBridgewatch.T5_ARMOR_PLATE_SET2(),
                InputDataBridgewatch.T5_ARMOR_PLATE_SET21(),
                InputDataBridgewatch.T6_ARMOR_PLATE_SET2(),

                InputDataBridgewatch.T5_ARMOR_PLATE_SET1(),
                InputDataBridgewatch.T5_ARMOR_PLATE_SET11(),
                InputDataBridgewatch.T6_ARMOR_PLATE_SET1(),

                InputDataBridgewatch.T5_SHOES_CLOTH_SET3(),
                InputDataBridgewatch.T5_SHOES_CLOTH_SET31(),
                InputDataBridgewatch.T6_SHOES_CLOTH_SET3(),

                InputDataBridgewatch.T5_SHOES_CLOTH_SET2(),
                InputDataBridgewatch.T5_SHOES_CLOTH_SET21(),
                InputDataBridgewatch.T6_SHOES_CLOTH_SET2(),

                InputDataBridgewatch.T5_SHOES_CLOTH_SET1(),
                InputDataBridgewatch.T5_SHOES_CLOTH_SET11(),
                InputDataBridgewatch.T6_SHOES_CLOTH_SET1(),
                
            ]);

            const dataCraft= {
                T5_2H_CROSSBOWLARGE, T5_2H_CROSSBOWLARGE1, T6_2H_CROSSBOWLARGE, 
                T5_2H_CROSSBOW, T5_2H_CROSSBOW1, T6_2H_CROSSBOW,
                T5_MAIN_1HCROSSBOW, T5_MAIN_1HCROSSBOW1, T6_MAIN_1HCROSSBOW,
     
                T5_MAIN_DAGGER, T5_MAIN_DAGGER1, T6_MAIN_DAGGER,
                T5_2H_DAGGERPAIR, T5_2H_DAGGERPAIR1, T6_2H_DAGGERPAIR,
                T5_2H_CLAWPAIR, T5_2H_CLAWPAIR1, T6_2H_CLAWPAIR,

                T5_2H_CURSEDSTAFF, T5_2H_CURSEDSTAFF1, T6_2H_CURSEDSTAFF,
                T5_2H_DEMONICSTAFF, T5_2H_DEMONICSTAFF1, T6_2H_DEMONICSTAFF,
                T5_MAIN_CURSEDSTAFF, T5_MAIN_CURSEDSTAFF1, T6_MAIN_CURSEDSTAFF,

                T5_ARMOR_PLATE_SET3, T5_ARMOR_PLATE_SET31, T6_ARMOR_PLATE_SET3,
                T5_ARMOR_PLATE_SET2, T5_ARMOR_PLATE_SET21, T6_ARMOR_PLATE_SET2,
                T5_ARMOR_PLATE_SET1, T5_ARMOR_PLATE_SET11, T6_ARMOR_PLATE_SET1,

                T5_SHOES_CLOTH_SET3, T5_SHOES_CLOTH_SET31, T6_SHOES_CLOTH_SET3,
                T5_SHOES_CLOTH_SET2, T5_SHOES_CLOTH_SET21, T6_SHOES_CLOTH_SET2,
                T5_SHOES_CLOTH_SET1, T5_SHOES_CLOTH_SET11, T6_SHOES_CLOTH_SET1,
            
            };

            await BWCraft.deleteMany({});
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
                return await BWCraft.create(item);
            }));
            
            res.json({dataRawdb,dataFarmDb,dataRcraftdb});


        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    //[GET] /Bridgewatch/BWTable
    BWTable = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataFarm = await BWFarm.find();
            const dataRaw = await MTRaw.find();
            const dataRefime = await MTRefine.find({ name: /STONEBLOC/ });
            const dataRefimes = await MTRefine.find();
            const dataCraft = await BWCraft.find();
            console.log(dataRefime);
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataRaw = mutipleMongooseToObject(dataRaw);
            const transformedDataFarm = mutipleMongooseToObject(dataFarm);
            const transformedDataRefime= mutipleMongooseToObject(dataRefime);
            const transformedDataRefimes= mutipleMongooseToObject(dataRefimes);
            const transformedDataCraft= mutipleMongooseToObject(dataCraft);


            // Gửi dữ liệu vào view
            res.render("Bridgewatch", {
                raws: transformedDataRaw,
                farms: transformedDataFarm,
                refine: transformedDataRefime,
                refines: transformedDataRefimes,
                crafts:transformedDataCraft,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }
}
module.exports = new BridgewatchControllers();
