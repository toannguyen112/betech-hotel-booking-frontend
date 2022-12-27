import React from 'react'
import { Link } from 'react-router-dom'

function Avatar({ route, userInfo }) {
    return (
        <Link to={route} className='avatar w-[40px] justify-center flex items-center h-[40px] rounded-full bg-black text-white text-center uppercase cursor-pointer'>
            <span> {userInfo?.username?.charAt(0).toUpperCase()} </span>
        </Link>
    )
}

export default Avatar