import './navbar.scss';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <ul>
                <li className='navbar-icon'><a href="/"><i className="fa-solid fa-house"></i></a></li>
                <li className="navbar-item"><a href="/settings"><i className="fa-solid fa-gear"></i></a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;