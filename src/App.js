import './App.css';
import Header from './components/Header/Header';
import Home from '../src/pages/Home';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
          {/* <Switch>
            <Route path="/" exact />
          </Switch> */}
      </Router>
    </div>
  );
}

export default App;
