//import './resources/main.css'; //comment out when running webpack script!
import Navigation from "./components/navigation";

import {ActionButton} from "@sb1/ffe-buttons-react";

function App() {
  return (
    <div className="App">
    <Navigation/>

      <header className="App-header">
        <p>
         Testapp
        </p>
          <div>
              <ActionButton onClick={f => console.log("knapp!")}>Action knapp</ActionButton>
          </div>

      </header>
    </div>
  );
}

export default App;
