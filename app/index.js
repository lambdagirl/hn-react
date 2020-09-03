import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'
import StoryList from "./components/StoryList";
function App(){
    return (
      <>
        <header className="header">
          <div className="container">
            <Nav />
          </div>
        </header>
        <StoryList />
      </>
    );
}
ReactDOM.render(
    <App />, document.getElementById('app')
)