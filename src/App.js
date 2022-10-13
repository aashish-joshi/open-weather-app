import './styles/App.css';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
