import React, { Component } from 'react';
import logo from './../logo.svg';

class Imagen extends Component {
    render() {
        return <img src = { logo }
        className = "App-logo"
        alt = "logo" />
    }
}

export default Imagen;