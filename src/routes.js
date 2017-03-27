import React from 'react'
import { Route } from 'react-router'
import Reddit from './components/Reddit'
import Hello from './components/Hello'
import Root from './containers/Root'

export default(
  <Route path='/' component={Root} >
     <Route path="reddit" component={Reddit} />
     <Route path="hello" component={Hello} />
  </Route>
)
