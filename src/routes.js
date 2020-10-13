import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCar from './pages/AddCar';

import EditCar from './pages/EditCar';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/addcar" component={AddCar} />
            <Route path="/editcar/:idCar" component={EditCar} />
            
        </BrowserRouter>
    );
}

export default Routes;
