import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from '../src/pages/Home';
import Create from '../src/pages/AddProduct';
import EditProduct from '../src/pages/EditProduct';

import MyProductsPage from './pages/MyProducts';
import WishlistPage from './pages/WishlistPage';

import About from '../src/pages/About';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Contact from '../src/pages/Contact';
import Covid from '../src/pages/Covid';

import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../src/Auth';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import React, { useState } from 'react';
import Toast from 'react-toast-component';

function App() {
  const [isOpen, setToast] = useState(true);
  return (
<>
    <Toast 
    isOpen={isOpen}
    hasAutoDismiss={false}
    hasCloseBtn
    closeCallback={() => setToast(false)}
    description="We use cookies for better user experience. For more information check our Cookies Policy."
    title="Cookies Notification"
    duration={5000}
    classNames={['info']}
    />

    <AuthProvider>
      <Router>
      <div className="App">
        <Header />
          <Switch>
          <PrivateRoute path="/home" exact component={About} /> 
            <Route path="/" exact component={Home} /> 
            <Route path="/add-product" exact component={Create} /> 
            <Route path="/edit-product/:productId" exact component={EditProduct} />       
            <Route path="/about" component={About} />
            <Route path="/story" component={About} />
            <Route path="/my-products" component={MyProductsPage} />
            <Route path="/wishlist" component={WishlistPage} />
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
</>
  );
}

export default App;