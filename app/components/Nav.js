import React from 'react'

const activeStyle={
    fontWeight: "bold",
    color: "red"
  }

function NavLink({nav}){
    return (
      <li activestyle={activeStyle}>
        <a className="nav-link">{nav}</a>
      </li>
    );
}
export default function Nav(){
    return (
      <nav className="nav">
        <ol className="row links">
          <NavLink nav="HackerNews" />
          <NavLink nav="top" />
          <NavLink nav="new" />
          <NavLink nav="show" />
          <NavLink nav="ask" />
          <NavLink nav="jobs" />
        </ol>
        <ol className="row links">
          <NavLink nav="about" />
        </ol>
      </nav>
    );
}