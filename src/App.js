import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Restaurentpage from './pages/Restaurentpage' 
import Dummy from './pages/Kilometerpage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
        <Route exact path="/">
        <Homepage/>
        </Route>
        <Route path="/details">
        <Restaurentpage/>
            
        </Route>
        <Route path="/distances">
        <Dummy/>
        </Route>
        </Switch>
      </Router>
     

    </div>
  );
}

export default App;
