import './footer.scss';

const Footer = () => {

    const date = new Date();

    return ( <footer>
        <p>&copy; {date.getFullYear()} Aashish Joshi</p>
    </footer> );
}
 
export default Footer;