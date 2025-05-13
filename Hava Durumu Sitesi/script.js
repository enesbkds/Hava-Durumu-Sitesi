async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "8aff4d8b00c5ba741f3721a9b5bfbac8"; // OpenWeatherMap API anahtarını buraya ekle
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <p><strong>${data.name}</strong> için hava durumu:</p>
        <p>${data.weather[0].description}</p>
        <p>🌡️ Sıcaklık: ${data.main.temp} °C</p>
        <p>💧 Nem: ${data.main.humidity} %</p>
        <p>💨 Rüzgar: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById("weatherResult").innerText =
        "❌ Şehir bulunamadı!";
    }
  } catch (error) {
    document.getElementById("weatherResult").innerText = "⚠️ Bir hata oluştu!";
  }
}
