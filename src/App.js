import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Contact from '../src/pages/Contact';
import Covid from '../src/pages/Covid';
// import PrivateRoute from '../src/PrivateRoute';
import { AuthProvider } from '../src/Auth';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <AuthProvider>
      <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/story" component={About} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Register} />
            <Route path="/contacts" component={Contact} />
            <Route path="/stores" component={Contact} />
            <Route path="/covid" component={Covid} />
          </Switch>
        <Footer />
      </div>
      </Router>
     </AuthProvider>
  
  );
}

export default App;