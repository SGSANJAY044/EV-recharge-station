import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full h-20  p-10'>
            <div className='w-full h-full flex items-center justify-center gap-32 '>
                <div>Home</div>
                <Link to='/user/map'>Map</Link>
                <div>About</div>
                <div>contact</div>
            </div>
        </div>
    )
}

export default Navbar
