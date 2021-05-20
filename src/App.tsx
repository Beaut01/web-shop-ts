import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar' 
import { HomePage } from './pages/Home'
import { BasketPage } from './pages/Basket'
import { Information } from './pages/Information' 
import { CpusPage } from './pages/Cpus'
import { TelephonesPage } from './pages/Telephones'
import { CpuElem } from './pages/Cpu'
import { Telephone } from './pages/Telephone'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={HomePage} path='/' exact/>
        <Route component={BasketPage} path='/basket'/>
        <Route component={Information} path='/information'/>
        <Route component={CpusPage} path='/cpus'/>
        <Route component={TelephonesPage} path='/telephones'/>
        <Route component={CpuElem} path='/cpus/id'/>
        <Route component={Telephone} path='/telephones/id'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
