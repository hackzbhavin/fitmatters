import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'

export default function Routers() {
    return (
        <Routes>

            <Route
                path='/'
                element={<Home />}

            />
            <Route
                path='/products'
                element={<Products />}

            />
            <Route
                path='/contact'
                element={<Contact />}

            />

        </Routes>
    )
}
