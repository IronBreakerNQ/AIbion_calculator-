const axios = require('axios');

const cheerio = require('cheerio');


const T3_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T3_ROCK&server=east";
const T4_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T4_ROCK&server=east";
const T5_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T5_ROCK&server=east";
const T6_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T6_ROCK&server=east";
const T7_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T7_ROCK&server=east";
const T8_ROCK = "https://albiononlinetools.com/economy/item.php?itemPrice=T8_ROCK&server=east";

class InputDataMartlock {
    async T3_ROCK() {
        try {
            const response = await axios.get(T3_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T3_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T4_ROCK() {
        try {
            const response = await axios.get(T4_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T4_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T5_ROCK() {
        try {
            const response = await axios.get(T5_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T5_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T6_ROCK() {
        try {
            const response = await axios.get(T6_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T6_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T7_ROCK() {
        try {
            const response = await axios.get(T7_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T7_ROCK",
                sellOrder: sellOrderData,
                buyOrder: buyOrderData,
            };

            return data;
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
            throw error;
        }
    }
    async T8_ROCK() {
        try {
            const response = await axios.get(T8_ROCK);
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
            const sellOrderData = findOrderByCity('#sellOrders', 'Martlock');
            const buyOrderData = findOrderByCity('#buyOrders', 'Martlock');

            const data = {
                name: "T8_ROCK",
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

module.exports = new InputDataMartlock();
