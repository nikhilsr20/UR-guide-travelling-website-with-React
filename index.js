import React from "react"
import ReactDOM from "react-dom/client"
import img from '/logo.png';
import "./index.css"
import Middle from "./middle";


const Nav=()=>{
    return (
      <>
      <img className="logo" src={img}></img>
      <h1 className="tagline">Explore the World</h1>
      <h1 className="nav">
        <ul className="list">
          <h1 id="home">Home</h1>
          <h1 id="about">About</h1>
          <h1 id="contact">Contact us</h1>
          <h1 id="login">Login</h1>
        </ul>
      </h1>
      <Middle/>
      </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Nav/>)