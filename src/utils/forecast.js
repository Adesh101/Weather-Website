const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=9ce9ef7ce4fd181d070d5b9c6dc9ac7e&query='+latitude+','+longitude

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to WeatherStack API. Check your internet connection!', undefined)
        }
        else if(body.error){
            callback('Unable to find the location weatherstack', undefined)
        }
        else{
            callback(undefined, 'The weather is '+body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees. There is a '+body.current.precip+'% chance of rain.')
        }
    })
}

module.exports = forecast