document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const apiKey = "cfbae2e02e5a84f62d21a6ca491e9338";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} km/h</p>
      `;
    })
    .catch(error => {
      alert(error.message);
    });
});
