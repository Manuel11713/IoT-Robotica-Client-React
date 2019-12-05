import React,{useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import HomeContainer from './Views/Home/HomeContainer.jsx';
import MarcoTeoricoContainer from './Views/MarcoTeorico/MarcoTeoricoContainer.jsx';
import CinematicaDirecta from './Views/CinematicaDirecta/CinematicaDirecta.jsx';
import CinematicaInversa from './Views/CinematicaInversa/CinematicaInversa.jsx';
import ConfiguracionContainer from './Views/Configuracion/ConfiguracionContainer.jsx';

function App() {
  const [host,setHost] = useState(null);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={props=><HomeContainer/>} />
          <Route exact path='/cinematica-directa' render={props=><CinematicaDirecta host={host}/>} />
          <Route exact path='/cinematica-inversa' render={props=><CinematicaInversa host={host}/>} />
          <Route exact path='/marco' render={props=><MarcoTeoricoContainer/>} />
          <Route exact path='/configuracion' render={props=><ConfiguracionContainer setHost={setHost}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
