import React from 'react'
import logo from './logo.svg'
import './App.scss'
import { LaunchList } from './components/LaunchList/LaunchList'
import { Roadstaer } from './components/Roadser/Roadstaer'

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <header className="app__header">
          <img src={logo} alt="SpaceX logo" className="app__logo" />
        </header>

        <main className="app__content">
          <LaunchList />

          <Roadstaer />
        </main>
      </div>
    </div>
  )
}

export default App
