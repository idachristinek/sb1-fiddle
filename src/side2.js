import {ActionButton} from "@sb1/ffe-buttons-react";
import Navigation from "./components/navigation";

function App2() {
    return (
        <div className="App">

            <Navigation/>

            <header className="App-header">
                <p>
                    Testapp - side 2
                </p>
                <div>
                    <ActionButton onClick={f => console.log("knapp 2!")}>Action knapp</ActionButton>
                </div>

            </header>
        </div>
    );
}

export default App2;