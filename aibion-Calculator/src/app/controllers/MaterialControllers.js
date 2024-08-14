const InputDataMaterial = require('../moduls/InputDataMaterial');
const InputDBridgewatch = require('../moduls/InputDataBridgewatch');
const InputDataLym = require('../moduls/InputDataLym');
const InputDataFortSterling = require('../moduls/InputDataFortSterling');
const InputDataThetford = require('../moduls/InputDataThetford');
const InputDataMartlock = require('../moduls/InputDataMartlock');

const MTRaw = require('../models/Material/MTRaw');
const MTRefine = require('../models/Material/MTRefine');

const {mutipleMongooseToObject} = require('../../util/mongoose');

class MaterialControllers{

    updatePrices = async () => {
        try {
            const refineRecords = await MTRefine.find({});
    
            await Promise.all(refineRecords.map(async (refineItem) => {
                let lowerMaterial1 = null;
                let lowerMaterial2 = null;

                if (refineItem.material1) {
                    lowerMaterial1 = await MTRefine.findOne({ name: refineItem.material1 });
                }
                if (refineItem.material2) {
                    lowerMaterial2 = await MTRaw.findOne({ name: refineItem.material2 });
                }
    
               let tmp1 = lowerMaterial1 ? lowerMaterial1.sellOrder.price : 0;
               
               let tmp2 = lowerMaterial2 ? lowerMaterial2.sellOrder.price : 0;

               tmp1 = tmp1 *refineItem.quantity1;
               tmp2 = tmp2 *refineItem.quantity2;
               console.log(tmp1,tmp2);

               refineItem.Principal = (tmp1 + tmp2) * 0.64

                // Save the updated record
                return await MTRefine.findByIdAndUpdate(refineItem._id, refineItem, { new: true });
            }));
    
            console.log('Prices updated successfully');
        } catch (error) {
            console.error('Error updating prices:', error);
        }
    };

    GetDataMaterial = async(req,res,next) => {
        try {
            //gather
            const [
                hide3, hide4, hide5, hide6, hide7, hide8, 
                WOOD3, WOOD4, WOOD5, WOOD6, WOOD7, WOOD8, 
                ORE3,ORE4,ORE5,ORE6,ORE7,ORE8, 
                FIBER3,FIBER4,FIBER5,FIBER6,FIBER7,FIBER8, 
                ROCK3,ROCK4,ROCK5,ROCK6,ROCK7,ROCK8, 


            ] = await Promise.all([
                InputDBridgewatch.hide_T3(),
                InputDBridgewatch.hide_T4(),
                InputDBridgewatch.hide_T5(),
                InputDBridgewatch.hide_T6(),
                InputDBridgewatch.hide_T7(),
                InputDBridgewatch.hide_T8(),

                InputDataLym.T3_WOOD(),
                InputDataLym.T4_WOOD(),
                InputDataLym.T5_WOOD(),
                InputDataLym.T6_WOOD(),
                InputDataLym.T7_WOOD(),
                InputDataLym.T8_WOOD(),

                InputDataFortSterling.T3_ORE(),
                InputDataFortSterling.T4_ORE(),
                InputDataFortSterling.T5_ORE(),
                InputDataFortSterling.T6_ORE(),
                InputDataFortSterling.T7_ORE(),
                InputDataFortSterling.T8_ORE(),

                InputDataThetford.T3_FIBER(),
                InputDataThetford.T4_FIBER(),
                InputDataThetford.T5_FIBER(),
                InputDataThetford.T6_FIBER(),
                InputDataThetford.T7_FIBER(),
                InputDataThetford.T8_FIBER(),

                InputDataMartlock.T3_ROCK(),
                InputDataMartlock.T4_ROCK(),
                InputDataMartlock.T5_ROCK(),
                InputDataMartlock.T6_ROCK(),
                InputDataMartlock.T7_ROCK(),
                InputDataMartlock.T8_ROCK(),
                
            ]);

            const dataRaw = {
                hide3,
                hide4,
                hide5,
                hide6,
                hide7,
                hide8, 
                WOOD3, WOOD4, WOOD5, WOOD6, WOOD7, WOOD8, 
                ORE3,ORE4,ORE5,ORE6,ORE7,ORE8, 
                FIBER3,FIBER4,FIBER5,FIBER6,FIBER7,FIBER8, 
                ROCK3,ROCK4,ROCK5,ROCK6,ROCK7,ROCK8, 
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


            //refine
            const [
                STONEBLOC2,STONEBLOC3, STONEBLOC4, STONEBLOC5, STONEBLOC6, STONEBLOC7, STONEBLOC8, 
                CLOTH2,CLOTH3, CLOTH4, CLOTH5, CLOTH6, CLOTH7, CLOTH8, 
                PLANKS2,PLANKS3,PLANKS4,PLANKS5,PLANKS6,PLANKS7,PLANKS8, 
                METALBAR2,METALBAR3,METALBAR4,METALBAR5,METALBAR6,METALBAR7,METALBAR8, 
                LEATHER2,LEATHER3,LEATHER4,LEATHER5,LEATHER6,LEATHER7,LEATHER8, 


            ] = await Promise.all([
                InputDataMaterial.T2_STONEBLOC(),
                InputDataMaterial.T3_STONEBLOC(),
                InputDataMaterial.T4_STONEBLOC(),
                InputDataMaterial.T5_STONEBLOC(),
                InputDataMaterial.T6_STONEBLOC(),
                InputDataMaterial.T7_STONEBLOC(),
                InputDataMaterial.T8_STONEBLOC(),

                InputDataMaterial.T2_CLOTH(),
                InputDataMaterial.T3_CLOTH(),
                InputDataMaterial.T4_CLOTH(),
                InputDataMaterial.T5_CLOTH(),
                InputDataMaterial.T6_CLOTH(),
                InputDataMaterial.T7_CLOTH(),
                InputDataMaterial.T8_CLOTH(),

                InputDataMaterial.T2_PLANKS(),
                InputDataMaterial.T3_PLANKS(),
                InputDataMaterial.T4_PLANKS(),
                InputDataMaterial.T5_PLANKS(),
                InputDataMaterial.T6_PLANKS(),
                InputDataMaterial.T7_PLANKS(),
                InputDataMaterial.T8_PLANKS(),

                InputDataMaterial.T2_METALBAR(),
                InputDataMaterial.T3_METALBAR(),
                InputDataMaterial.T4_METALBAR(),
                InputDataMaterial.T5_METALBAR(),
                InputDataMaterial.T6_METALBAR(),
                InputDataMaterial.T7_METALBAR(),
                InputDataMaterial.T8_METALBAR(),

                InputDataMaterial.T2_LEATHER(),
                InputDataMaterial.T3_LEATHER(),
                InputDataMaterial.T4_LEATHER(),
                InputDataMaterial.T5_LEATHER(),
                InputDataMaterial.T6_LEATHER(),
                InputDataMaterial.T7_LEATHER(),
                InputDataMaterial.T8_LEATHER(),
                
            ]);

            const dataRefine = {
                STONEBLOC2,
                STONEBLOC3,
                STONEBLOC4,
                STONEBLOC5,
                STONEBLOC6,
                STONEBLOC7,
                STONEBLOC8, 
                CLOTH2,CLOTH3, CLOTH4, CLOTH5, CLOTH6, CLOTH7, CLOTH8, 
                PLANKS2,PLANKS3,PLANKS4,PLANKS5,PLANKS6,PLANKS7,PLANKS8, 
                METALBAR2,METALBAR3,METALBAR4,METALBAR5,METALBAR6,METALBAR7,METALBAR8, 
                LEATHER2,LEATHER3,LEATHER4,LEATHER5,LEATHER6,LEATHER7,LEATHER8, 
            };

            await MTRefine.deleteMany({});
            const dataRefinedb = await Promise.all(Object.values(dataRefine).map(async (item,index) => {
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
                return await MTRefine.create(item);
            }));

            await this.updatePrices();
            
            res.json({dataRefinedb,dataRawdb});
        } catch (error) {
            next(error); // Properly handle errors
        }
    }

    MTTable = async (req, res, next) => {
        try {
            // Lấy dữ liệu từ cả hai cơ sở dữ liệu
            const dataRaw = await MTRaw.find();
            const dataRefimes = await MTRefine.find();
            // Chuyển đổi dữ liệu Mongoose thành đối tượng JavaScript thuần
            const transformedDataRaw = mutipleMongooseToObject(dataRaw);
            const transformedDataRefimes= mutipleMongooseToObject(dataRefimes);

            // Gửi dữ liệu vào view
            res.render("Material", {
                raws: transformedDataRaw,
                refines: transformedDataRefimes,
            });
        } catch (error) {
            next(error); // Properly handle errors
        }
    }
}

module.exports = new MaterialControllers;