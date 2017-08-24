// @flow
import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import App from './components/App'

import Home from './layouts/Home'
import WieZijnWij from './layouts/WieZijnWij'
import Behandelingen from './layouts/Behandelingen'
import Producten from './layouts/Producten'
import Salon from './layouts/Salon'
import Cadeaubon from './layouts/Cadeaubon'
import Contact from './layouts/Contact'

export default () =>
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Wie-Zijn-Wij' component={WieZijnWij} />
      <Route path='/Behandelingen' component={Behandelingen} />
      <Route path='/Producten' component={Producten} />
      <Route path='/Salon' component={Salon} />
      <Route path='/Cadeaubon' component={Cadeaubon} />
      <Route path='/Contact' component={Contact} />
    </Switch>
  </App>

