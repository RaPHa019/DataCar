import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Menu(){
    return (
        <header className="page-header">
            <div className="header-content">

                <Link to="/" className="home">
                
                <h2>DataCar</h2>
                </Link>

                <Link to="/addcar" className="addcar">
                
                <p>Cadastrar carro</p>
                </Link>
                
            </div>
        </header>
    );
}

export default Menu;
