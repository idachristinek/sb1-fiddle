import {Link} from "react-router-dom";
import logo from "../logo.svg";

function Navigation() {
    return (
        <div className="Navbar">
            <img src={logo} alt="Sparebank 1" className="logo"/>
            <nav>
                <Link to="/">App</Link> |{" "}
                <Link to="/2">Page2</Link> |{" "}
                <Link to="/3">Page3</Link>
            </nav>
        </div>
    );
}

export default Navigation;