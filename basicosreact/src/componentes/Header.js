import React from 'react'

// ***** Como --> Class Component ***** //
// class Header extends Component {
//     render() {
//         return (
//             <h1>Nombre del Sitio</h1>
//         )
//     }
// }

// ***** Como --> Functional Component ***** //
const Header = () => {
    return (
        <header>
            <h1>Tienda Virtual</h1>
        </header>
    )
}

export default Header;