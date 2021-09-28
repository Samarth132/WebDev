import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navhead">Blog101</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Write blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;