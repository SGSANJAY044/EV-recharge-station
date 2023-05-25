import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full h-20  p-10'>
            <div className='w-full h-full flex items-center justify-center gap-32 '>
                <Link to='/admin/home'>Home</Link>
                <Link to='/admin/map'>Map</Link>
                <Link to='/admin/control'>Control</Link>
                <div>contact</div>
            </div>
        </div>
    )
}

export default Navbar
