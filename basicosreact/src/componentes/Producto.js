import React, { Component } from 'react';

class Producto extends Component {
    // Nuevos Métodos
    render() {
        // Leer datos, crear variables, etc
        const {nombre, precio} = this.props.producto;
        return (
            <div>  
                <h3>{nombre}</h3>
                <h4>Precio: ${precio}</h4>
                { /*console.log(this.props)*/ }
            </div>
        )
    }
}

export default Producto;