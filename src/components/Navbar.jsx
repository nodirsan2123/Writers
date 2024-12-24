import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center py-4'>
            <div className='w-10 flex items-center gap-2'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR26thddOoCp-NIIeTVnXc0zsG21Pyl_FOFw&s" alt="" />
                <h1 className='self-center text-2xl font-semibold whitespace-nowrap'>Scholars</h1>
            </div>
            <ul className='flex gap-3'>
                <li className='text-[18px] hover:text-cyan-900'><Link to={"/home"}>
                    Home
                </Link></li>
                <li className='text-[18px] hover:text-cyan-900'><Link to={"/writers"}>
                    Writers
                </Link></li>
                <li className='text-[18px] hover:text-cyan-900'> <Link to={"/books"}>
                    Books
                </Link></li>
            </ul>
        </div>
    )
}
