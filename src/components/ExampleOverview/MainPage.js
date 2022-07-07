import Navigation from "../navigation";
import {Heading1} from "@sb1/ffe-core-react";
import {ActionButton} from "@sb1/ffe-buttons-react";
import {getKontoliste} from "./fetch-helpers";

function MainPage() {

    const hentKontoListe = () => {
        const kontoliste = getKontoliste(true).then(data => {console.log(data)})

    }

    return (
        <div className="App">
            <Navigation/>
            <Heading1>Oversikt</Heading1>
            <ActionButton onClick={() => hentKontoListe(true)}>Action knapp</ActionButton>
        </div>
    );
}

export default MainPage;
