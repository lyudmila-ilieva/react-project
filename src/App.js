import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from '../src/pages/Home';
import About from '../src/pages/About';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
