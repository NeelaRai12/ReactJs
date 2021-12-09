import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'


const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Signin" element={<Signin />} />
            </Routes>

        </Router>
    )
}

export default MyRoute
