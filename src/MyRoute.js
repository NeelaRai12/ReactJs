import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import Deals from './pages/auth/Deals'
import Increment from './hooks/Increment'
import UseEff from './hooks/UseEff'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/Main'


const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Signin" element={<Signin />} />
                <Route path="Deals" element={<Deals/>} />

                {/* hooks */}
                <Route path="/test" element={<Increment />} />
                <Route path="/effect" element={<UseEff />} />
                <Route path="/datafetch" element={<DataFetch/>}/>
                <Route path="/main" element={<Main/>}/>
            </Routes>

        </Router>
    )
}

export default MyRoute
