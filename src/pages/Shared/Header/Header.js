import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg";

const Header = () => {

    const menuItems = <>
        <li>
            <Link to={'/'}>Home</Link>
            <Link>Category</Link>
        </li>
    </>

    return (
        <div className="navbar mb-5 pt-5 bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a href='/'>Item 1</a></li> */}
                        <li>
                            <Link className=' font-semibold'>Menu</Link>
                            <ul className="p-2">
                                {menuItems}
                            </ul>
                        </li>
                        {/* <li><a href='/'>Item 3</a></li> */}
                    </ul>
                </div>
                <Link to={'/home'}>
                    <img className="btn btn-ghost text-xl" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a href='/'>Item 1</a></li> */}
                    <li>
                        <details>
                            <summary><Link className=' font-semibold'>Menu</Link></summary>
                            <ul className="p-2">
                                {menuItems}
                            </ul>
                        </details>
                    </li>
                    {/* <li><a href='/'>Item 3</a></li> */}
                </ul>
            </div>
            <div className="navbar-end" >
                <Link data-theme="sunset" className="btn btn-outline btn-primary">Appointment</Link>
            </div>
        </div>
    );
};

export default Header;