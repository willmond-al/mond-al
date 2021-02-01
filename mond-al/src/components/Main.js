import { Link, Route, NavLink, useHistory, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Weather from './widgets/Weather'

import styled from 'styled-components'


function Main() {
  return (
    <StyledMain>

      <nav className="home-nav">
        {/* <NavLink className="top-text" to={"/about"}>who this is</NavLink> */}
        <NavLink className="top-text" to={"/badIdeas"}>bad ideas</NavLink>
        <NavLink className="top-text" to={"/goodIdeas"}>good ideas</NavLink>
      </nav>
      <div className="header">
      <Link to="/">MOND-AL</Link>
      </div>
        <Weather/>
    </StyledMain>
  );
}

const StyledMain = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

text-align:center;
font-family: 'Oswald', sans-serif;
transition:0.7s;

.header{

  padding: 8%;
  background: white;
  transition:0.7s;
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
  margin: 3%;
  transition:0.7s;
}

.home-nav:hover{
    color:white
}

`

export default Main;