const regionCoords = {
  crimea: { latitude: 45.0, longitude: 34.0 },
};
const regions = document.querySelectorAll('svg path');
regions.forEach(region => {
  region.addEventListener('click', () => {
    const key = region.id;
    console.log(key);
    const coords = regionCoords[key];
    const forecast = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&hourly=temperature_2m,rain,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high`;
    fetch(forecast)
      .then(res => res.json())
      .then(data => {
        console.log(`the weather for the ${key}: `, data);
      });
  });
});
