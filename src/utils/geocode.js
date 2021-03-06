const request = require('request')

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2FoaWw4MTEiLCJhIjoiY2s5eTVsbHJqMGh4cDNzcWRvMnp4eTFvNiJ9.PZP2lOfnhcqcm3EHYlx2mQ&limit=1'

    request({ url: geocodeURL, json: true }, (error, response)=> {
        //const data = JSON.parse(response.body)
        if (error) {
            callback('Unable to connect location services!', undefined)
        } else if (response.body.features.length === 0 ) {
            callback('Unable to find location. Try another search!', undefined)  
        } else {
           callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
           })
        }   
    })  
}

module.exports = geocode;