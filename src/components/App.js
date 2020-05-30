import React from 'react'
import './../css/App.css'
import CardDetail from './CardDetail'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import './../css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cards/:id" component={CardDetail} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
