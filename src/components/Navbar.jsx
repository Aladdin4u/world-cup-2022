import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
        <img className="nav--logo_icon" src="wcimage/Logo.png" />
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/match" className="nav-link">Matches</Link>
          <Link to="/table" className="nav-link">Table</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/live" className="nav-link">Live</Link>
          <Link to="/player" className="nav-link">TopScores</Link>
        </div>
      </nav>
    );
}
 
export default Navbar;