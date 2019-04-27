import React, { Component } from 'react';
import logo from './../logo.svg';
// import './../css/index.css';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component {
    render() {
        return (
            <div className="App App-header">
                <Header></Header>
                <Productos></Productos>
                <img src={logo} className="App-logo" alt="logo" />
                <Footer></Footer>
            </div>
        )
    }
}

export default Aplicacion;