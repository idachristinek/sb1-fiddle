import Navigation from "../../components/navigation";
import {Heading1} from "@sb1/ffe-core-react";

function DinBank() {
    return (
        <div className="App">

            <Navigation/>

            <header className="App-header">
                <Heading1 className="App-heading">
                    Lag din egen oversikt
                </Heading1>
            </header>
        </div>
    );
}

export default DinBank;