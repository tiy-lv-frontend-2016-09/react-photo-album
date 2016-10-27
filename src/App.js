import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route } from 'react-router'

import 'assets/styles/main.scss'

import Home from 'ui/Home'
import Album from 'ui/Album'
// import Photo from 'ui/Photo'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/album/:id" component={Album} />
    {/*<Route path="/photo/:id" component={Photo} />*/}
  </Router>
), document.getElementById('app'))