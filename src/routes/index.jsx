import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react-dom/client';
import Home from '../pages/Home'
import Details from '../pages/Details'


const Rotas = ()=>{
    return (
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Details" element={<Details/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas