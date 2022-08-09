import {Heading1, Heading3} from "@sb1/ffe-core-react";
import {ButtonGroup, SecondaryButton, ShortcutButton} from "@sb1/ffe-buttons-react";
import CardExample from "../../components/card/CardExample";
import Bankkort from "../../components/bankkkort/Bankkort";
import Navigation from "../../components/navigation";
import {HusIkon, MynterTreStablerIkon, SparegrisIkon, SporsmalstegnIkon} from "@sb1/ffe-icons-react";
import {accounts} from "../../components/overforing/kontoer";
import {formatNumber} from "@sb1/ffe-formatters";
import React, {useState} from "react";
import {getKontoliste} from "../../components/ExampleOverview/fetch-helpers";
import ListeMedCards from "./ListeMedCards";
import {MySpinner} from "../../components/Spinner";
import {ToggleSwitch} from "@sb1/ffe-form-react";

const MinDrommeOversikt = () => {
    const [brukAlternativSpinner, setAlternativSpinner] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [kontoListe, setKontoListe] = useState([])
    const [hentSparekontoer, setHentSparekontoer] = useState(false);
    const [hentBrukskontoer, setHentBrukskontoer] = useState(false);
    const [hentMedError, setHentMedError] = useState(false);

    const hentKontoEtterType = (kontoType) => {
        switch (kontoType) {
            case "BRUK":
                hentKontoListe();
                setHentBrukskontoer(!hentBrukskontoer);
                setHentSparekontoer(false);
                break;
            case "SAVINGS":
            case "BSU":
                hentKontoListe();
                setHentSparekontoer(!hentSparekontoer);
                setHentBrukskontoer(false);
                break;
            default:
                break;
        }
    }

    const hentKontoListe = () => {
        setIsLoading(true)
        setError(false)
        setKontoListe([])
        console.log(hentMedError);

        getKontoliste(hentMedError, 1000)
            .then(data => {
                setIsLoading(false)
                setKontoListe(data)
            })
            .catch(() => {
                setIsLoading(false)
                setError(true)
                setErrorMessage("Kunne ikke hente kontoliste")
            })
    }

    const brukskontoer = kontoListe.filter((account) => account.type === 'BRUK');
    const sparekontoer = kontoListe.filter((account) => account.type === 'SAVINGS' || account.type === 'BSU');

    console.log(brukskontoer, sparekontoer);

    const onToggleFeilmeldinger = (event) => {
        setHentMedError(event.target.checked);
    }

    const onToggleAlternativSpinner = (event) => {
        setAlternativSpinner(event.target.checked);
    }

    return (<div className="App">
        <div className="drommeoversikt_container">
            <Navigation/>
            <header>
                <Heading1 className="drommeoversikt_heading">
                    Min drømmeoversikt
                </Heading1>
                <div className="dromme-toggles">
                    <ToggleSwitch
                        onChange={onToggleFeilmeldinger}
                    >
                        Skru på feilmeldinger</ToggleSwitch>
                    <ToggleSwitch
                        onChange={onToggleAlternativSpinner}
                    >
                        Skru på alternativ loader</ToggleSwitch>
                </div>
                <div className="drommeoversikt_wrapper">
                    <div>
                        <SecondaryButton onClick={() => {
                            hentKontoEtterType('BRUK')
                        }}>{hentBrukskontoer ? 'Skjul brukskontoer' : 'Vis brukskontoer'}</SecondaryButton>
                        {hentBrukskontoer && (
                            <ListeMedCards kontoer={brukskontoer} heading={'Mine brukskontoer'} error={error}
                                           errorMessage={errorMessage}/>)}
                    </div>
                    <div>
                        <SecondaryButton onClick={() => {
                            hentKontoEtterType('SAVINGS')
                        }}>{hentSparekontoer ? 'Skjul sparekontoer' : 'Vis sparekontoer'}</SecondaryButton>
                        {hentSparekontoer && (
                            <ListeMedCards kontoer={sparekontoer} heading={'Mine sparekontoer'} error={error}
                                           errorMessage={errorMessage}/>)}
                    </div>
                </div>
                <div>
                    {isLoading && <MySpinner brukAlternativSpinner={brukAlternativSpinner}/>}
                </div>
            </header>
        </div>
    </div>);
}

export default MinDrommeOversikt;