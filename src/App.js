import './App.css'; import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Food from './Components/Food/Food';






function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Hero />
        <Switch>
          <Route path="/home">
            <Food />
          </Route>
          <Route path="/users">
            <Food />
          </Route>
          <Route path="/">
            <Food />
          </Route>
        </Switch>


      </Router>

    </div >
  );
}

export default App;
