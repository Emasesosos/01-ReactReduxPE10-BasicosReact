import React, { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {
    render() {
        return(
            <div>
                <h2>Listado de Productos</h2>
                { Object.keys(this.props.productos).map(key => (
                    <Producto
                        key={key}
                        producto={this.props.productos[key]} 
                    >
                    </Producto>
                    /*console.log(this.props.productos[key])*/
                ) ) }
                {/*console.log(this.props.productos)*/}
            </div>
        )
    }
}

export default Productos;