import './navbar.scss';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <ul>
                <li className='navbar-icon'><a href="/"><i class="fa-solid fa-house"></i></a></li>
                <li className="navbar-item"><a href="/settings"><i class="fa-solid fa-gear"></i></a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;