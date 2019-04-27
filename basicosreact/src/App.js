import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export class AppEjemplo extends Component {
  render() {
    return(
      React.createElement(
        'div',
        {className: 'App-header'},
        'Hola desde el componente',
        React.createElement(
          'input',
          {type: "text", value: 'Value para el Input'},
        ),
        React.createElement(
            'img',
            {src: logo, className:'App-logo',  alt:'logo'}
        )
      )
    );
  }
}

export default App;
