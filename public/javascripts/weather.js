const searchBtn = document.querySelector('#searchBtn');

let updateBackground = (weatherDesc) => {
    let body = document.body;
    

    if (weatherDesc.toLowerCase().includes('sunny')) {
        body.style.backgroundImage = 'url("/images/sunny.jpg")';
    } else if (weatherDesc.toLowerCase().includes('cloudy')) {
        body.style.backgroundImage = 'url("/images/cloudy.jpg")';
    } else if (weatherDesc.toLowerCase().includes('rainy')) {
        body.style.backgroundImage = 'url("/images/rainy.jpg")';
    } else {
        body.style.backgroundImage = '';
        // body.style.background = 'white';
    }
};

searchBtn.addEventListener('click', () => {
    const location = document.querySelector('#locationInput').value.trim();
    const alertBox = document.querySelector('#alertBox');
    console.log(location);

    if (!location) {
        alertBox.textContent = 'Please enter a location.';
        alertBox.classList.remove('d-none');
        return;
    }

    axios({
        method: 'GET',
        url: '/api/weather',
        params: {
            location: location
        }
    })
    .then(data => {
        // document.querySelector('#city').textContent = data.location;
        console.log(data);
        // failed get data from backend
        if (data.data.msg === 'failed') {
            alertBox.textContent = 'Invalid location. Please try other location.';
            alertBox.classList.remove('d-none');
            return;
        }
        // update
        document.querySelector('#city').textContent = data.data.location;
        document.querySelector('#temperature').textContent = data.data.temperature;
        document.querySelector('#humidity').textContent = data.data.humidity;
        document.querySelector('#windSpeed').textContent = data.data.windSpeed;
        document.querySelector('#weatherIcon').src = data.data.weather_icon_url;
        document.querySelector('#description').textContent = data.data.description;
        document.querySelector('#weatherInfo').style.display = 'block';
        updateBackground(data.data.description);
        alertBox.classList.add('d-none');
    })
    .catch(error => {
        alertBox.textContent = 'Invalid location. Please try other location.';
        alertBox.classList.remove('d-none');
        return;
    });
});