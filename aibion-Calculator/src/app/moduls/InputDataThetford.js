const axios = require('axios');

const cheerio = require('cheerio');

//gather raw
const T2_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T2_FIBER&server=east#price_search';
const T3_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T3_FIBER&server=east#price_search';
const T4_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T4_FIBER&server=east#price_search';
const T5_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T5_FIBER&server=east#price_search';
const T6_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T6_FIBER&server=east#price_search';
const T7_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T7_FIBER&server=east#price_search';
const T8_FIBER = 'https://albiononlinetools.com/economy/item.php?itemPrice=T8_FIBER&server=east#price_search';

class InputDataThetford{
    async T3_FIBER() {
        try {
            const response = await axios.get(T3_FIBER);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T3_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T4_FIBER() {
        try {
            const response = await axios.get(T4_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T4_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_FIBER() {
        try {
            const response = await axios.get(T5_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T5_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_FIBER() {
        try {
            const response = await axios.get(T6_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T6_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T7_FIBER() {
        try {
            const response = await axios.get(T7_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T7_FIBER",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T8_FIBER() {
        try {
            const response = await axios.get(T8_FIBER);
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

            // Tìm dữ liệu từ Sell Orders ở Thetford và Buy Orders ở Bridgewatch
            const sellOrderData = findOrderByCity('#sellOrders', 'Thetford');
            const buyOrderData = findOrderByCity('#buyOrders', 'Thetford');

            const data = {
                name: "T8_FIBER",
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

module.exports = new InputDataThetford;