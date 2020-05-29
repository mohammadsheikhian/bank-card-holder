import React from 'react'
import './../css/App.css'
import CardDetail from './CardDetail'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cards/:id" component={CardDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
