import { Link } from "react-router-dom";
import {StrongText} from "@sb1/ffe-core-react";

function Navigation() {
    return (
        <div className="Navbar">
            <nav>
                <Link to="/"><StrongText>App</StrongText></Link> |{" "}
                <Link to="/2"><StrongText>Page2</StrongText></Link> |{" "}
                <Link to="/3"><StrongText>Eksempel-app</StrongText></Link>
            </nav>
        </div>
    );
}

export default Navigation;