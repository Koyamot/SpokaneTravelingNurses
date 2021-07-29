import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Header, Footer } from './components/common';

import { Amenities, Landing, Booking } from './components/pages'
import { LogIn } from './components/pages/LogIn';


function App() {
  return (
    <div className="App" style={{ width: '100%', maxWidth: '96rem', margin: '0 auto' }}>
      <Header />
      <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/property' component={Landing} />
        <Route path='/amenities' component={Amenities} exact/>
        <Route path='/tenant' component={Landing} />
        <Route path='/booking' component={Booking} exact/>
        <Route path='/contact' component={Landing} />
        <Route path='/explore' component={Landing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
