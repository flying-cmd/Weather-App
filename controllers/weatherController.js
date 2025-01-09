exports.searchWeather = (req, res, next) => {
    const city = req.query.location;
    console.log(city);


    if (!city) {
        return res.json({ msg: "failed", error: 'Missing location parameter' });
    }


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
            return res.json({ msg: "failed", error: "Invalid location. Please try other location." });
        });
}