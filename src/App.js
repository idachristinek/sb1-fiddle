import Navigation from "./components/navigation";
import logo from "./logo.svg";
import {ActionButton} from "@sb1/ffe-buttons-react";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Sparebank 1" className="logo"/>
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
