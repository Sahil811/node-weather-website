const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=497ab31f0c71076616e7864059e46acc&query=${latitude},${longitude}`

    request({ url, json: true}, (error, { body })=> {
        //const data = JSON.parse(response.body)
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)  
        } else {
            callback(undefined, `It is currently ${body.current.temperature} degrees out. The humidity is at ${body.current.humidity}.`)
        }
    })
}

module.exports = forecast;