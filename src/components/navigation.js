import { Link } from "react-router-dom";
import {StrongText} from "@sb1/ffe-core-react";
import logo from "../logo.svg";

function Navigation() {
    return (
        <div className="Navbar">
            <img src={logo} alt="Sparebank 1" className="logo"/>
            <nav>
                <Link to="/"><StrongText>App</StrongText></Link> |{" "}
                <Link to="/2"><StrongText>Page2</StrongText></Link> |{" "}
                <Link to="/3"><StrongText>Eksempel-app</StrongText></Link>
            </nav>
        </div>
    );
}

export default Navigation;