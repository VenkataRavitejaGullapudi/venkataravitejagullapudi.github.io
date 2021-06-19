import './NavBar.css'
import React from 'react'

import { slide as Menu } from 'react-burger-menu'
import { Link, useLocation } from 'react-router-dom'

const NavBar = ({ isOpenMenu, setIsOpenMenu }) => {
    // const history = useHistory()
    // const routeMatch = useRouteMatch()
    // const params = useParams()
    // // console.log(history,location,routeMatch,params)

    const location = useLocation()


    function checkLocation(path) {
        return location.pathname === path ? 'active-item' : '';
    }
    // console.log(isOpenMenu)
    function closeMenu() {
        console.log('hi', isOpenMenu)
        setIsOpenMenu(false)
    }
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    function handleStateChange(state) {
        setIsOpenMenu(state.isOpen)
    }


    return (
        <div>
            <Menu isOpen={isOpenMenu} onStateChange={(state) => handleStateChange(state)} >
                <Link to="/" onClick={closeMenu} className={`menu-item ${checkLocation('/')}`}>Home</Link>
                <Link to="/about" onClick={closeMenu} className={`menu-item ${checkLocation('/about')}`}>About</Link>
                <Link to="/projects" onClick={closeMenu} className={`menu-item ${checkLocation('/projects')}`}>Projects</Link>
                <Link to="/skills" onClick={closeMenu} className={`menu-item ${checkLocation('/skills')}`}>Skills</Link>
                <Link to="/contact" onClick={closeMenu} className={`menu-item ${checkLocation('/contact')}`}>Contact</Link>
            </Menu>
        </div>
    )
}

export default NavBar
