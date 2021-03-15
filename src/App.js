import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          {/* <Switch>
            <Route path="/" exact />
          </Switch> */}
      </Router>
    </div>
  );
}

export default App;
