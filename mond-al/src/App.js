import logo from './logo.svg';
import { Route, NavLink, useHistory } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import styled from 'styled-components'
import About from './components/About'
import BadIdeas from './components/BadIdeas'
import GoodIdeas from './components/GoodIdeas'


function App() {
  return (
<Router>
    <StyledApp>
      <h1>MONDiAL</h1>

      <nav className="home-nav">
        {/* <NavLink className="top-text" to={"/about"}>who this is</NavLink> */}
        <NavLink className="top-text" to={"/badIdeas"}>bad ideas</NavLink>
        <NavLink className="top-text" to={"/goodIdeas"}>good ideas</NavLink>
      </nav>
      <Route
      path="/about"
      render={()=><About/>}
      />
      <Route
      path="/badIdeas"
      render={()=><BadIdeas/>}
      />
      <Route
      path="/goodIdeas"
      render={()=><GoodIdeas/>}
      />
    </StyledApp>
    </Router>
  );
}

const StyledApp = styled.div`

text-align:center;

.home-nav{
  display:flex;
  justify-content: space-evenly;
}

`

export default App;
