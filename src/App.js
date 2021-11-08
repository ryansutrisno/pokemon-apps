import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import MyPokemom from './pages/MyPokemon'
import Detail from './pages/Detail'
import './App.css'
import { DetailProvider } from './context'

function App() {
  return (
    <DetailProvider>
      <SnackbarProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:pokemonSlug" component={Detail} />
            <Route exact path="/mypokemon" component={MyPokemom} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </DetailProvider>
  )
}

export default App
