import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialWeather =[]

const Weather = () =>{

const [weather, setWeather] = useState(initialWeather)

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London, uk',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: '"metric" or "imperial"',
    mode: 'xml, html'
  },
  headers: {
    'x-rapidapi-key': '865c617e2bmsh38788dc305e4337p1c212cjsn4d4cbc35dcac',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};


useEffect(()=>{
    axios.request(options).then(function (response) {
        setWeather(JSON.parse(response.data.split('test(')[1].split(')')[0]))

    }).catch(function (error) {
        console.error(error);
    });
})



    return(<div>
    </div>)
}

export default Weather