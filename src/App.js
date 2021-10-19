import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Menu from './Component/Menu';
import Home from './Component/Home'
import Card from './Component/Card';
import Info from './Component/Info';
import Product from './Component/Product'
import Register from './Component/Register';
import User from './Component/User';
import About from './Component/About';
import Contact from './Component/Contact';
import PageNotFound from './Component/PageNotFound';






function App() {

  return ( 
    <>

      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/card' component={Card} />
        <Route path='/info' component={Info} />
        <Route path='/product' component={Product} />
        <Route path='/register' component={Register} />
        <Route path='/user' component={User} />
        
        <Route component={PageNotFound} />
      </Switch>

    </>
  );
}

export default App;
