import React from 'react';
import { Link } from 'react-router-dom';

/* AntD */

const AdminHeader = () => {

    return (
        <>
            <header>
                <nav>
                    <Link className="navLink" to='/'>Home</Link>
                    <Link className="navLink" to='/admin/rooms'>Rooms</Link>
                    <Link className="navLink" to='/contact'>Contact Us</Link>
                </nav>
            </header>
        </>
    )
}

export default AdminHeader;