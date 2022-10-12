import './navbar.scss';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <ul>
                <li className='navbar-icon'><a href="/">Home</a></li>
                <li className="navbar-item"><a href="/about">About</a></li>
                <li className="navbar-item"><a href="/settings">Settings</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;