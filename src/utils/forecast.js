const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b587c0fe0de4d9425b4d233bcbb24a26/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.currently)
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degress out. There is a ${body.currently.precipProbability}% chance of ${body.daily.data[0].precipType}. The high today is ${body.daily.data[0].temperatureMax} degrees and the low will be ${body.daily.data[0].temperatureMin} degrees. The humidity is ${body.daily.data[0].humidity * 100}%`)
        }
    })
}

module.exports = forecast