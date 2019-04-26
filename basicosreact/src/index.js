import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ***** React SIN JSX ***** //
const titulo = React.createElement(
    'h1',
    {id: 'titulo', className: 'App-header'},
    'Hola Mundo sin JSX',
)

// ***** React CON JSX y Function Declaration ***** //
function TituloFunctionDeclaration() {
    return(
        <div className="App">
            <header className="App-header">
                <h1 id="titulo" className="encabezado">Hola Mundo con JSX y Function Declaration XD</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

// ***** React CON JSX y Arrow Funtions ***** //

const TituloArrowFunction = () => {
    return(
        <div className="App">
            <header className="App-header">
                <h1 id="titulo" className="encabezado">Hola Mundo con JSX y Arrow Functions XD</h1>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

class TituloClase extends Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <h1 id="titulo" className="encabezado">Hola Mundo con JSX y Clases XD</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}

class TituloClaseComponent extends Component {
    render() {
        return(
            React.createElement(
                'h1',
                {id: 'titulo', className: 'App-header'},
                'Hola Mundo sin JSX y Clases XD',
            )
        );
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(titulo, document.getElementById('root')); /* SIN JSX */
// ReactDOM.render(<TituloFunctionDeclaration />, document.getElementById('root')); /* CON JSX y Function Declaration */
// ReactDOM.render(<TituloArrowFunction />, document.getElementById('root')); /* CON JSX y Arrow Function */
ReactDOM.render(<TituloClase />, document.getElementById('root')); /* CON JSX y Clases */
// ReactDOM.render(<TituloClaseComponent />, document.getElementById('root')); /* SIN JSX y Clases */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
