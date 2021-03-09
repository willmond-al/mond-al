import { Link, Route, NavLink, useHistory, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Weather from './widgets/Weather'
import image from '../assets/face.jpeg'

import styled from 'styled-components'
import { useEffect } from 'react'

var mover = document.getElementById('mover')

function myMove() {
  var elem = document.getElementById("mover");
  var pos = -600;
  var id = setInterval(frame, 1.8);
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



  useEffect(()=>{
    setInterval(() => {
      myMove()
    },5150);

  }, )
  
  
  return (
    <StyledMain>
      {/* <button onClick={myMove}>click</button> */}
      <nav className="home-nav">
        {/* <NavLink className="top-text" to={"/about"}>who this is</NavLink> */}
        <NavLink className="top-text" to={"/badIdeas"}>bad ideas</NavLink>
        <NavLink className="top-text" to={"/goodIdeas"}>good ideas</NavLink>
      </nav>
      <div className="header">
        <div className="title">
      <Link to="/">MOND-AL</Link>
        </div>
        <div id="mover">
          <a href="https://twitter.com/wbmondal" target="_blank">
        <span className="twitter">twitter</span>
          </a>
      <img className="img" src={image}/>
          <a href="https://twitter.com/wbmondal" target="_blank">
        <span className="mv">multiverse</span>
          </a>
        </div>
      </div>
    </StyledMain>
  );
}

// document.addEventListener('keydown', function(e) {
//   if (e.which === 37) {
//     var leftNumbers = mover.style.left.replace('px', '')
//     var left = parseInt(leftNumbers, 10)

//     mover.style.left = `${left - 1}px`
//   }
// })

// mover.style.bottom = '100px'

const StyledMain = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

text-align:center;
font-family: 'Oswald', sans-serif;
transition:0.7s;
margin-bottom: 0.5%;

.header{

  padding: 5%;
  transition:0.7s;
  margin-bottom: 1%;
}

#mover{

  position: relative;
  /* display: flex; */
/* justify-content:center; */
  /* box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3) */
}

.mv{
  color:purple;
}

.twitter{
  color:lightskyblue
}

.img{
  width: 23%;
  border-radius: 90px;
}

.header:hover{

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
  margin: 1%;
  transition:0.7s;
  background:lightgoldenrodyellow
}

.home-nav a:hover{
   color: grey
}

.title{
  margin-bottom:3%;
}

.title a{
  font-size:5rem;
}

@media (max-width: 500px){
  .twitter{
    color: green
  }
}

`


export default Main;