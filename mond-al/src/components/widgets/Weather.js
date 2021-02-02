import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const initialWeather = []

//just make a new api call with the location changed for the submit 

const Weather = () =>{

const [weather, setWeather] = useState(initialWeather)
const [specificWeather, setSpecificWeather] = useState(initialWeather)
const [temperature, setTemperature] = useState('')
const [location, setLocation] = useState('Seattle, usa')
const [newLocation, setNewLocation] = useState('')



const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: location,
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
  

  // function fetchData(){

   axios.request(options)
    .then(function (response) {
      
     const data = JSON.parse(response.data.split('test(')[1].split(')')[0])
     setWeather(data)
     setSpecificWeather(data.weather[0])
     setTemperature(data.main)

      
    })
    .catch(function (error) {
        console.error(error);
    });
  // }
}, [location])



const submitHandler = e =>{
  e.preventDefault()
  setLocation(newLocation)
  e.target.value=""

}

const changeHandler = e => {
  let value = e.target.value
  setNewLocation(value)
  // console.log(newLocation)

  }

    return(
      <StyledWeather>
    you can enter any place you want to know the current weather in :) <br/>
    write in this format: Cityname, country e.g. (Seattle, usa) <br/>
    <form onSubmit={submitHandler}>
      <input
      type="text"
      placeholder="where?"
      name="location"
      value={newLocation}
      onChange={changeHandler}
      />
      <button>go</button>
    <div className="weatherAnnounce">
      The weather in {weather.name} is {specificWeather.description}, 
      and the temperature is about {Math.round(temperature.temp-273)} degrees C
    </div>
    </form>
    </StyledWeather>
    )
}

const StyledWeather = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
text-align:center;
font-family: 'Oswald', sans-serif;

button{
  margin: 1%;
}

`

export default Weather