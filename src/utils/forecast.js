const request = require('postman-request')

const forecast = (latitude, longitude, callback) =>
{
    const url = 'http://api.weatherstack.com/current?access_key=38b9a9537153a1e9bf9ea352c1047c94&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            const current = body.current

            callback(undefined, 
                current.weather_descriptions[0] + '.' + 
                ' It is currently ' + current.temperature + ' degrees out.' +
                ' It feels like ' + current.feelslike + ' degrees out.' +
                ' The humidity is ' + current.humidity + '%.')
        }
    })
}

module.exports = forecast