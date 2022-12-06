import React from 'react'
import Container from 'react-bootstrap/Container'
import FinderWindow from './components/finderWindow'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <h1>baupal</h1>
      </header>
      <FinderWindow />
    </Container>
  )
}

export default App
