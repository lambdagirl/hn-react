import React from 'react';
function NavLin({nav}){
    return (
      <li activestyle={{color:"black"}}>
        <a className="nav-link" href="#">{nav}</a>
      </li>
    );
}
export default function Nav(){
    return (
      <nav className="nav">
        <ol className="row links">
          <NavLin nav="HackerNews" />
          <NavLin nav="top" />
          <NavLin nav="new" />
          <NavLin nav="show" />
          <NavLin nav="ask" />
          <NavLin nav="jobs" />
        </ol>
        <ol className="row links">
          <NavLin nav="about" />
        </ol>
      </nav>
    );
}