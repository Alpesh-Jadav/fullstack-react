const request = require('request-promise');

const API_KEY = '48ea55289b291c7be00d99d636dcf851';

class Weather {
    static retriveByCity (city, callback) {
        request({
            uri:`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ eror: 'could not reach OpenWeatherMap API.'});
            
        });
    }
}

module.exports = Weather;