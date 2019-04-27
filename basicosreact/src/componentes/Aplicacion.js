import React, { Component } from 'react';
import Header from './Header';
import Productos from './Productos';
import Imagen from './Imagen';
import Footer from './Footer';


class Aplicacion extends Component {
    // State en aplicación Principal

    // ***** CON STATE *****

    // Forma 1
    
    /*
    constructor(props) {
        super();
        this.state = {
            productos: [
                {nombre: 'Libro', precio: 200},
                {nombre: 'Disco de Música', precio: 100},
                {nombre: 'Instrumento Musical', precio: 800},
                {nombre: 'Reproductor Musical', precio: 1500},
                {nombre: 'Album Ed. Especial', precio: 500},
            ]
        };
    }
    */
    

    // Forma 2
    /*
    state = {
        productos: [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Disco de Música', precio: 100},
            {nombre: 'Instrumento Musical', precio: 800},
            {nombre: 'Reproductor Musical', precio: 1500},
            {nombre: 'Album Ed. Especial', precio: 500},
        ]
    };
    */

    // Forma 3
    // Métodos del Ciclo de Vida
    /*
    state = {
        productos: []
    };

    componentDidMount() {
        // Método: Para ejecutarse una vez que el componente esta a la vista 
        // console.log('componentDidMount() --> ¡¡Ya!!')
        // setState() Método para cambiar o actualizar el state

        const productos = [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Disco de Música', precio: 100},
            {nombre: 'Instrumento Musical', precio: 800},
            {nombre: 'Reproductor Musical', precio: 1500},
            {nombre: 'Album Ed. Especial', precio: 500},
        ]

        setTimeout ( () => {
            this.setState({
                productos: productos
            })
        },3000);

    } 
    */

    // ***** MAIN --> render() ***** //
    render() {

        // SIN STATE
        const productos = [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Disco de Música', precio: 100},
            {nombre: 'Instrumento Musical', precio: 800},
            {nombre: 'Reproductor Musical', precio: 1500},
            {nombre: 'Album Ed. Especial', precio: 500},
        ]

        return (
            <div className="App App-header">
                <Header titulo='Nuestra Tienda Virtual'></Header>

                 { /* CON STATE */}
                {/* <Productos productos={this.state.productos}
                    ></Productos> */ }

                { /* SIN STATE */}
                <Productos productos={productos}
                   ></Productos>

                <Imagen></Imagen>

                <Footer></Footer>
            </div>
        )
    }
}

export default Aplicacion;