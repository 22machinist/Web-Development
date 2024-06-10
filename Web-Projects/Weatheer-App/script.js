document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const cityInput = document.getElementById('city-input');
    const weatherResult = document.getElementById('weather-result');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const condition = document.getElementById('condition');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = cityInput.value;
        await fetchWeather(city);
    });

    async function fetchWeather(city) {
        const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            updateWeather(data);
        } catch (error) {
            alert(error.message);
        }
    }

    function updateWeather(data) {
        cityName.textContent = data.name;
        temperature.textContent = data.main.temp;
        humidity.textContent = data.main.humidity;
        condition.textContent = data.weather[0].description;
        weatherResult.classList.remove('hidden');
    }
});
