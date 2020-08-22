import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'

function App(){
    return (
      <>
        <header className="header">
          <div className="container">
            <Nav />
          </div>
        </header>
      </>
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
)