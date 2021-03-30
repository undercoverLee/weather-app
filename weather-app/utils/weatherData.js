const request = require('request')
const constants = require('../config')

const weatherData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY
    console.log(url)
    callback(true)


}

module.exports = weatherData