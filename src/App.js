import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {

    const nav = (
      <nav>
        <img src="./images/ironhack-logo.svg" alt="Logo Ironhack" />
        <img src="./images/menu-top.svg" alt="menu icon" />
      </nav>
    );

    const header = (
      <header>
        <div id="content">
          <img src="./images/react-logo.svg" alt="React logo" />
          <h1>
            Say hello to <br />
            ReactJS
          </h1>
          <span>
            You will learn to use <br />
            the most popular frontend library <br />
            and become a super Ninja developer.
          </span>
          <button>Awesome!</button>
        </div>
      </header>
    );

    const main = (
      <ul>
        <li>
          <img src="./images/icon1.png" alt="icon1" />
          <h4>Declarative</h4>
          <p>
            React makes it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </li>
        <li>
          <img src="./images/icon2.png" alt="icon2" />
          <h4>Components</h4>
          <p>
            Build encapsulated <br />
            components that <br />
            manage their state.
          </p>
        </li>
        <li>
          <img src="./images/icon3.png" alt="icon3" />
          <h4>Single-Way</h4>
          <p>
            A set of immutable <br />
            values are passed to <br />
            the component's.
          </p>
        </li>
        <li>
          <img src="./images/icon4.png" alt="icon4" />
          <h4>JSX</h4>
          <p>
            Statically-typed. <br />
            designed to run on <br />
            modern browsers.
          </p>
        </li>
      </ul>
    )

    return (
      <div className="App">
        {nav}
        {header}
        {main}
      </div>
    );
  }
}

export default App;