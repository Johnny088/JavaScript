const regionCoords = {
  crimea: { latitude: 45.0, longitude: 34.0 },
  kherson: { latitude: 46.6537, longitude: 32.61 },
  zaporizhyia: { latitude: 47.8533, longitude: 35.2345 },
  donetsk: { latitude: 48.0159, longitude: 37.8028 },
  luhansk: { latitude: 48.574, longitude: 39.3078 },
  kharkiv: { latitude: 49.9935, longitude: 36.2304 },
  sumy: { latitude: 50.9077, longitude: 34.7981 },
  uzhhorod: { latitude: 48.621, longitude: 22.2882 },
  lutsk: { latitude: 50.7472, longitude: 25.3254 },
  lviv: { latitude: 49.8429, longitude: 24.0311 },
  ivano_Frankivsk: { latitude: 48.9215, longitude: 24.7097 },
  chernitsi: { latitude: 48.29, longitude: 25.9333 },
  ternopil: { latitude: 49.5535, longitude: 25.5948 },
  dnipro: { latitude: 48.45, longitude: 34.9833 },
  odesa: { latitude: 46.4825, longitude: 30.7233 },
  mykolaiv: { latitude: 46.975, longitude: 31.9946 },
  kropyvnytskyi: { latitude: 48.5077, longitude: 32.2623 },
  khmelnitskyi: { latitude: 49.4215, longitude: 26.9969 },
  rivne: { latitude: 50.6199, longitude: 26.2516 },
  chernihiv: { latitude: 51.5055, longitude: 31.2849 },
  poltava: { latitude: 49.5883, longitude: 34.5514 },
  zhytomyr: { latitude: 50.255, longitude: 28.659 },
  vinnitsia: { latitude: 49.233, longitude: 28.4682 },
  cherkasy: { latitude: 49.4444, longitude: 32.0598 },
  kyiv: { latitude: 50.4501, longitude: 30.5234 },
  kyiv_region: { latitude: 50.4501, longitude: 30.5234 },
  sevastopol: { latitude: 44.6168, longitude: 33.5254 },
};
const regions = document.querySelectorAll('svg path');
regions.forEach(region => {
  region.addEventListener('click', () => {
    const key = region.id;
    console.log(key);
    const coords = regionCoords[key];
    const forecast = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,rain,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,relative_humidity_2m,surface_pressure,wind_speed_10m`;
    fetch(forecast)
      .then(res => res.json())
      .then(data => {
        const hourly = data.hourly;
        const timePoints = hourly.time;
        const now = new Date();
        const currentTime = now.toISOString().slice(0, 13) + ':00';
        const index = timePoints.indexOf(currentTime);
        if (index !== -1) {
          alert(
            `Location: ${key} \nTemperature: ${hourly.temperature_2m[index]}C \nHumidity: ${hourly.relative_humidity_2m[index]}% \nPressure: ${hourly.surface_pressure[index]} hPa \nWind speed: ${hourly.wind_speed_10m[index]} m/s`
          );
        } else {
          alert('something went wrong');
        }

        console.log(`the weather for the ${key}: `, data);
      });
  });
});
