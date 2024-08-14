const axios = require('axios');

const cheerio = require('cheerio');
//gather
const T3_WOOD = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_WOOD&server=east";
const T4_WOOD = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_WOOD&server=east";
const T5_WOOD = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_WOOD&server=east";
const T6_WOOD = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_WOOD&server=east";
const T7_WOOD = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_WOOD&server=east";
const T8_WOOD = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_WOOD&server=east";


//
const T1_CARROT = 'https://albiononlinetools.com/economy/item.php?itemPrice=T1_CARROT&server=east';
const T4_BURDOCK ='https://albiononlinetools.com/economy/item.php?itemPrice=T4_BURDOCK&server=east';
const T5_EGG ='https://albiononlinetools.com/economy/item.php?itemPrice=T5_EGG&server=east';
const T8_PUMPKI ='https://albiononlinetools.com/economy/item.php?itemPrice=T8_PUMPKIN&server=east';

//craft

const T5_2H_CLAYMORE = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CLAYMORE&server=east';
const T5_2H_CLAYMORE1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_CLAYMORE1&server=east';
const T6_2H_CLAYMORE = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_CLAYMORE&server=east';

const T5_MAIN_SWORD = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_SWORD&server=east';
const T5_MAIN_SWORD1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_SWORD1&server=east';
const T6_MAIN_SWORD = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_SWORD&server=east';

const T5_2H_DUALSWORD = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DUALSWORD&server=east';
const T5_2H_DUALSWORD1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_DUALSWORD1&server=east';
const T6_2H_DUALSWORD = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_DUALSWORD&server=east';

const T5_2H_BOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_BOW&server=east';
const T5_2H_BOW1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_BOW@1&server=east';
const T6_2H_BOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_BOW&server=east';

const T5_2H_WARBOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_WARBOW&server=east';
const T5_2H_WARBOW1 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_WARBOW@1&server=east';
const T6_2H_WARBOW = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_WARBOW&server=east';

const T5_2H_LONGBOW='https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_LONGBOW&server=east';
const T5_2H_LONGBOW1='https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_LONGBOW@1&server=east';
const T6_2H_LONGBOW='https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_LONGBOW&server=east';

const T5_2H_ARCANESTAFF='https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_ARCANESTAFF&server=east';
const T5_2H_ARCANESTAFF1='https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_ARCANESTAFF@1&server=east';
const T6_2H_ARCANESTAFF='https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_ARCANESTAFF&server=east';

const T5_2H_ENIGMATICSTAFF='https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_ENIGMATICSTAFF&server=east';
const T5_2H_ENIGMATICSTAFF1='https://albiononlinetools.com/economy/item.php?itemPrice=T5_2H_ENIGMATICSTAFF@1&server=east';
const T6_2H_ENIGMATICSTAFF='https://albiononlinetools.com/economy/item.php?itemPrice=T6_2H_ENIGMATICSTAFF&server=east';

const T5_MAIN_ARCANESTAFF='https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_ARCANESTAFF&server=east';
const T5_MAIN_ARCANESTAFF1='https://albiononlinetools.com/economy/item.php?itemPrice=T5_MAIN_ARCANESTAFF@1&server=east';
const T6_MAIN_ARCANESTAFF='https://albiononlinetools.com/economy/item.php?itemPrice=T6_MAIN_ARCANESTAFF&server=east';



const T5_HEAD_LEATHER_SET1= 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_LEATHER_SET1&server=east';
const T5_HEAD_LEATHER_SET11= 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_LEATHER_SET1@1&server=east';
const T6_HEAD_LEATHER_SET1= 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_HEAD_LEATHER_SET1&server=east';

const T5_HEAD_LEATHER_SET3 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_LEATHER_SET3&server=east';
const T5_HEAD_LEATHER_SET31 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_LEATHER_SET3@1&server=east';
const T6_HEAD_LEATHER_SET3 = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_HEAD_LEATHER_SET3&server=east';

const T5_HEAD_LEATHER_SET2= 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_LEATHER_SET2&server=east';
const T5_HEAD_LEATHER_SET21= 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_HEAD_LEATHER_SET2@1&server=east';
const T6_HEAD_LEATHER_SET2= 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_HEAD_LEATHER_SET2&server=east';

const T5_SHOES_LEATHER_SET1="https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_LEATHER_SET1&server=east";
const T5_SHOES_LEATHER_SET11="https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_LEATHER_SET1@1&server=east";
const T6_SHOES_LEATHER_SET1="https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_LEATHER_SET1&server=east";

const T5_SHOES_LEATHER_SET2="https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_LEATHER_SET2&server=east";
const T5_SHOES_LEATHER_SET21="https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_LEATHER_SET2@1&server=east";
const T6_SHOES_LEATHER_SET2="https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_LEATHER_SET2&server=east";

const T5_SHOES_LEATHER_SET3="https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_LEATHER_SET3&server=east";
const T5_SHOES_LEATHER_SET31="https://albiononlinetools.com/economy/item.php?itemPrice=T5_SHOES_LEATHER_SET3@1&server=east";
const T6_SHOES_LEATHER_SET3="https://albiononlinetools.com/economy/item.php?itemPrice=T6_SHOES_LEATHER_SET3&server=east";

class InputDataLym{
    async T3_WOOD() {
        try {
            const response = await axios.get(T3_WOOD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T3_WOOD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T4_WOOD() {
        try {
            const response = await axios.get(T4_WOOD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T4_WOOD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_WOOD() {
        try {
            const response = await axios.get(T5_WOOD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T5_WOOD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_WOOD() {
        try {
            const response = await axios.get(T6_WOOD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T6_WOOD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T7_WOOD() {
        try {
            const response = await axios.get(T7_WOOD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T7_WOOD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T8_WOOD() {
        try {
            const response = await axios.get(T8_WOOD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T8_WOOD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    //farming

    async T1_CARROT() {
        try {
            const response = await axios.get(T1_CARROT);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T1_CARROT",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T4_BURDOCK() {
        try {
            const response = await axios.get(T4_BURDOCK);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "Crenellated Burdock",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_EGG() {
        try {
            const response = await axios.get(T5_EGG);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "Goose Eggs",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T8_PUMPKI() {
        try {
            const response = await axios.get(T8_PUMPKI);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Lymhurst  và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Lymhurst ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Lymhurst ');

            const data = {
                name: "T8_PUMPKI",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    //craft
    async T5_2H_CLAYMORE() {
        try {
            const response = await axios.get(T5_2H_CLAYMORE);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_CLAYMORE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_CLAYMORE1() {
        try {
            const response = await axios.get(T5_2H_CLAYMORE1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_CLAYMORE1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_CLAYMORE() {
        try {
            const response = await axios.get(T6_2H_CLAYMORE);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_CLAYMORE",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_MAIN_SWORD() {
        try {
            const response = await axios.get(T5_MAIN_SWORD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_SWORD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_SWORD1() {
        try {
            const response = await axios.get(T5_MAIN_SWORD1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_SWORD1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_SWORD() {
        try {
            const response = await axios.get(T6_MAIN_SWORD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_MAIN_SWORD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_DUALSWORD() {
        try {
            const response = await axios.get(T5_2H_DUALSWORD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_DUALSWORD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_DUALSWORD1() {
        try {
            const response = await axios.get(T5_2H_DUALSWORD1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_DUALSWORD1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_DUALSWORD() {
        try {
            const response = await axios.get(T6_2H_DUALSWORD);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_DUALSWORD",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_BOW() {
        try {
            const response = await axios.get(T5_2H_BOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_BOW",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_BOW1() {
        try {
            const response = await axios.get(T5_2H_BOW1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_BOW1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_BOW() {
        try {
            const response = await axios.get(T6_2H_BOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_BOW",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_WARBOW() {
        try {
            const response = await axios.get(T5_2H_WARBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_WARBOW",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_WARBOW1() {
        try {
            const response = await axios.get(T5_2H_WARBOW1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_WARBOW1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_WARBOW() {
        try {
            const response = await axios.get(T6_2H_WARBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_WARBOW",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_LONGBOW() {
        try {
            const response = await axios.get(T5_2H_LONGBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_LONGBOW",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_LONGBOW1() {
        try {
            const response = await axios.get(T5_2H_LONGBOW1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_LONGBOW1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_LONGBOW() {
        try {
            const response = await axios.get(T6_2H_LONGBOW);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_LONGBOW",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_ARCANESTAFF() {
        try {
            const response = await axios.get(T5_2H_ARCANESTAFF);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_ARCANESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_ARCANESTAFF1() {
        try {
            const response = await axios.get(T5_2H_ARCANESTAFF1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_ARCANESTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_ARCANESTAFF() {
        try {
            const response = await axios.get(T6_2H_ARCANESTAFF);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_ARCANESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_2H_ENIGMATICSTAFF() {
        try {
            const response = await axios.get(T5_2H_ENIGMATICSTAFF);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_ENIGMATICSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_2H_ENIGMATICSTAFF1() {
        try {
            const response = await axios.get(T5_2H_ENIGMATICSTAFF1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_2H_ENIGMATICSTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_2H_ENIGMATICSTAFF() {
        try {
            const response = await axios.get(T6_2H_ENIGMATICSTAFF);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_2H_ENIGMATICSTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_MAIN_ARCANESTAFF() {
        try {
            const response = await axios.get(T5_MAIN_ARCANESTAFF);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_ARCANESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_MAIN_ARCANESTAFF1() {
        try {
            const response = await axios.get(T5_MAIN_ARCANESTAFF1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_MAIN_ARCANESTAFF1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_MAIN_ARCANESTAFF() {
        try {
            const response = await axios.get(T6_MAIN_ARCANESTAFF);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_MAIN_ARCANESTAFF",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_HEAD_LEATHER_SET1() {
        try {
            const response = await axios.get(T5_HEAD_LEATHER_SET1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_LEATHER_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_HEAD_LEATHER_SET11() {
        try {
            const response = await axios.get(T5_HEAD_LEATHER_SET11);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_LEATHER_SET11",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_HEAD_LEATHER_SET1() {
        try {
            const response = await axios.get(T6_HEAD_LEATHER_SET1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_HEAD_LEATHER_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_HEAD_LEATHER_SET3() {
        try {
            const response = await axios.get(T5_HEAD_LEATHER_SET3);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_LEATHER_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_HEAD_LEATHER_SET31() {
        try {
            const response = await axios.get(T5_HEAD_LEATHER_SET31);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_LEATHER_SET31",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_HEAD_LEATHER_SET3() {
        try {
            const response = await axios.get(T6_HEAD_LEATHER_SET3);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_HEAD_LEATHER_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }


    async T5_HEAD_LEATHER_SET2() {
        try {
            const response = await axios.get(T5_HEAD_LEATHER_SET2);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_LEATHER_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_HEAD_LEATHER_SET21() {
        try {
            const response = await axios.get(T5_HEAD_LEATHER_SET21);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_HEAD_LEATHER_SET21",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_HEAD_LEATHER_SET2() {
        try {
            const response = await axios.get(T6_HEAD_LEATHER_SET2);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_HEAD_LEATHER_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_SHOES_LEATHER_SET1() {
        try {
            const response = await axios.get(T5_SHOES_LEATHER_SET1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_SHOES_LEATHER_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_LEATHER_SET11() {
        try {
            const response = await axios.get(T5_SHOES_LEATHER_SET11);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_SHOES_LEATHER_SET11",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_LEATHER_SET1() {
        try {
            const response = await axios.get(T6_SHOES_LEATHER_SET1);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_SHOES_LEATHER_SET1",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_SHOES_LEATHER_SET2() {
        try {
            const response = await axios.get(T5_SHOES_LEATHER_SET2);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_SHOES_LEATHER_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_LEATHER_SET21() {
        try {
            const response = await axios.get(T5_SHOES_LEATHER_SET21);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_SHOES_LEATHER_SET21",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_LEATHER_SET2() {
        try {
            const response = await axios.get(T6_SHOES_LEATHER_SET2);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_SHOES_LEATHER_SET2",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }

    async T5_SHOES_LEATHER_SET3() {
        try {
            const response = await axios.get(T5_SHOES_LEATHER_SET3);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_SHOES_LEATHER_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_SHOES_LEATHER_SET31() {
        try {
            const response = await axios.get(T5_SHOES_LEATHER_SET31);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T5_SHOES_LEATHER_SET31",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_SHOES_LEATHER_SET3() {
        try {
            const response = await axios.get(T6_SHOES_LEATHER_SET3);
            const $ = cheerio.load(response.data);

            // Hàm tìm kiếm các hàng chứa tên thành phố cụ thể
            const findOrderByCity = (tableSelector, cityName) => {
                const orderRows = $(tableSelector + ' tbody tr');
                let orderData = null;

                orderRows.each(function () {
                    const city = $(this).find('td:nth-child(2)').text().trim();
                    if (city.includes(cityName)) {
                        orderData = {
                            city: city,
                            price: $(this).find('td:nth-child(3)').text().trim(),
                            lastUpdate: $(this).find('td:nth-child(4)').text().trim(),
                        };
                        return false; // Dừng vòng lặp khi tìm thấy hàng đầu tiên chứa tên thành phố cụ thể
                    }
                });

                return orderData;
            };

            // Tìm dữ liệu từ Sell Orders ở Martlock và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Black Market ');
            const buyOrderData = findOrderByCity('#buyOrders', 'Black Market ');

            const data = {
                name: "T6_SHOES_LEATHER_SET3",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
}



module.exports = new InputDataLym;