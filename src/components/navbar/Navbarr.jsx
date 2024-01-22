import React, { useState } from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';

const Menu = ()=>{
    return(
        <>
        <p><a href="#home">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#skill">Skills</a></p>
        <p><a href="#contact">Contact</a></p>
        </>
    )
}

const Navbarr = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="portfolio__navbar">
            <div className="portfolio__navbar-links">
                <div className="portfolio__navbar-links_container">
                   <Menu></Menu>
                </div>

            </div>

            <div className='portfolio__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>}

                {toggleMenu && (
                    <div className='portfolio__navbar-menu_container slide-in-right'>
                        <div className='portfolio__navbar-menu_container-links'>
                            <Menu></Menu>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbarr