import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
    return (
        <>
        <ul>
            <li><Link to="/">firstpage</Link></li>
            <li><Link to="/third">secondpage</Link></li>
        </ul>
            
        </>
    )
}

export default Test
