import { Link, Route, NavLink, useHistory, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Weather from './widgets/Weather'
import image from '../assets/face.jpeg'

import styled from 'styled-components'
import { useEffect } from 'react'

function myMove() {
  var elem = document.getElementById("mover");
  var pos = -600;
  var id = setInterval(frame, 2);
  console.log("hello")
   function frame() {
    if (pos === 700) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
      elem.style.right = pos + 'px';
    }
  }
}

const Main = () => {

  // useEffect(()=>{
  //   myMove()
  // }, [])
  
  
  return (
    <StyledMain>
      {/* <button onClick={myMove}>click</button> */}
      <nav className="home-nav">
        {/* <NavLink className="top-text" to={"/about"}>who this is</NavLink> */}
        <NavLink className="top-text" to={"/badIdeas"}>bad ideas</NavLink>
        <NavLink className="top-text" to={"/goodIdeas"}>good ideas</NavLink>
      </nav>
      <div className="header">
      <Link to="/">MOND-AL</Link>
      <img id="mover" src={image}/>
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

text-align:center;
font-family: 'Oswald', sans-serif;
transition:0.7s;
margin-bottom: 2%;

.header{

  padding: 8%;
  background: white;
  transition:0.7s;
}

#mover{
  align-items:left;
  position: relative;
  display: inline;
}

.header:hover{
  background: blueviolet;
}

.header a{
  font-weight:500;
  font-size:30px;
  color:orangered;
  text-decoration:none;
}

.home-nav{
  display:flex;
  justify-content: space-evenly;
  padding:2%;
  margin: 3%;
  transition:0.7s;
  background:lightgoldenrodyellow
}



.home-nav a:hover{
   color: grey
}

`

export default Main;