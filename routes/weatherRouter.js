var express = require('express');
var router = express.Router();
const axios = require('axios');

/* send request to the backend */
router.get('/', function(req, res, next) {
    const city = req.query.location;
    console.log(city);
    

    if (!city) {
        return res.json({msg:"failed", error: 'Missing location parameter' });
    }

    

//     console.log(res.json(res.Stringify({"data":
//     {
//         "request": {
//             "type": "City",
//             "query": "New York, United States of America",
//             "language": "en",
//             "unit": "m"
//         },
//         "location": {
//             "name": "New York",
//             "country": "United States of America",
//             "region": "New York",
//             "lat": "40.714",
//             "lon": "-74.006",
//             "timezone_id": "America/New_York",
//             "localtime": "2019-09-07 08:14",
//             "localtime_epoch": 1567844040,
//             "utc_offset": "-4.0"
//         },
//         "current": {
//             "observation_time": "12:14 PM",
//             "temperature": 13,
//             "weather_code": 113,
//             "weather_icons": [
//                 "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//             ],
//             "weather_descriptions": [
//                 "Sunny"
//             ],
//             "wind_speed": 0,
//             "wind_degree": 349,
//             "wind_dir": "N",
//             "pressure": 1010,
//             "precip": 0,
//             "humidity": 90,
//             "cloudcover": 0,
//             "feelslike": 13,
//             "uv_index": 4,
//             "visibility": 16
//         }
//     }
// }
//     )));

//     return res.json(res.Stringify({"data":
//         {
//             "request": {
//                 "type": "City",
//                 "query": "New York, United States of America",
//                 "language": "en",
//                 "unit": "m"
//             },
//             "location": {
//                 "name": "New York",
//                 "country": "United States of America",
//                 "region": "New York",
//                 "lat": "40.714",
//                 "lon": "-74.006",
//                 "timezone_id": "America/New_York",
//                 "localtime": "2019-09-07 08:14",
//                 "localtime_epoch": 1567844040,
//                 "utc_offset": "-4.0"
//             },
//             "current": {
//                 "observation_time": "12:14 PM",
//                 "temperature": 13,
//                 "weather_code": 113,
//                 "weather_icons": [
//                     "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
//                 ],
//                 "weather_descriptions": [
//                     "Sunny"
//                 ],
//                 "wind_speed": 0,
//                 "wind_degree": 349,
//                 "wind_dir": "N",
//                 "pressure": 1010,
//                 "precip": 0,
//                 "humidity": 90,
//                 "cloudcover": 0,
//                 "feelslike": 13,
//                 "uv_index": 4,
//                 "visibility": 16
//             }
//         }
//     }
//         ));

    axios.request({
        method: 'GET',
        url: 'https://api.weatherstack.com/current?access_key=5730a6e341a0fb9d9e8aceed0f68d709',
        params: {
            query: city,
        }
    })
    .then(data => {
        console.log(data);
        return res.json({
            msg: "success",
            location: data.data.location.name,
            temperature: data.data.current.temperature,
            humidity: data.data.current.humidity,
            windSpeed: data.data.current.wind_speed,
            description: data.data.current.weather_descriptions[0],
            weather_icon_url: data.data.current.weather_icons[0],
        });
    })
    .catch(error => {
        console.log(error);
        return res.json({msg: "failed", error: "Invalid location. Please try other location."});
    });
});

module.exports = router;
