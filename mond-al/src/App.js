import { Link, Route, NavLink, useHistory, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import BadIdeas from './components/BadIdeas'
import GoodIdeas from './components/GoodIdeas'

import './App.css';

const ideas ={
  badIdeas: [],
  goodIdeas: []
}



function App() {
  return (
  <Router>
   <Main/>
   <Switch>
      <Route
      path="/about"
      render={()=><About/>}
      />
      <Route
      path="/badIdeas"
      render={()=><BadIdeas badIdeas={ideas.badIdeas}/>}
      />
      <Route
      path="/goodIdeas"
      render={()=><GoodIdeas goodIdeas={ideas.goodIdeas}/>}
      />
      <Route
      exact path="/"/>
      </Switch>
  </Router>
  );
}

export default App;
