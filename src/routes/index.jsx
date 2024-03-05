import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Rotas = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Details/:nome" element={<Details />}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas