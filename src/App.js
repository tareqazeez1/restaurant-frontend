import './App.css'; import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Food from './Components/Food/Food';
import Footer from './Components/Footer/Footer';






function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Hero />
        <Switch>
          <Route path="/">
            <Food />
          </Route>
          <Route path="/users">
            <Food />
          </Route>
        </Switch>
        <Footer />

      </Router>

    </div >
  );
}

export default App;
