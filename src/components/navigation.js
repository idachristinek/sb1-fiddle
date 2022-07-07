import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="Navbar">
            <nav>
                <Link to="/">App</Link> |{" "}
                <Link to="/2">Page2</Link>
            </nav>
        </div>
    );
}

export default Navigation;