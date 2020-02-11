import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../pages/main-page'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} exact/>
      </Switch>
    </>
  )
}

export default App