const axios = require('axios');
const Promise = require('bluebird');

start();
async function start() {

  console.log('-----Task#1-----');
  const cities = await Promise.all([
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=Minsk'),
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=Madrid'),
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=Rome')
    ]);
  cities.forEach(city => {
    console.log(city.data.results[0].formatted_address);
  });

  console.log('-----Task#2-----');
  const country = await Promise.any([
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=Paris'),
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=Nice')
    ]);
  console.log(country.data.results[0].address_components[3].long_name);

  console.log('-----Task#3-----');
  const ViaNicolaSalvi = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=Via Nicola Salvi');
  console.log(ViaNicolaSalvi.data.results[0].formatted_address);
  ViaNicolaSalvi.data.results[0].address_components.forEach((component) => {
      console.log(`   -${component.long_name}`);
  });

}