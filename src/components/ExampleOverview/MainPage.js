import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Heading1, Paragraph, DividerLine} from '@sb1/ffe-core-react';
import {SecondaryButton} from '@sb1/ffe-buttons-react';
import {IconCard} from '@sb1/ffe-cards-react';
import {
    SparegrisIkon,
    MynterTreStablerIkon,
    HusIkon,
    SporsmalstegnIkon
} from '@sb1/ffe-icons-react';

import {MyErrorMessage} from '../ErrorMessage'
import {MySpinner} from '../Spinner'
import Navigation from '../navigation';
import {getKontoliste} from './fetch-helpers';

const MainPage = () => {

    let navigate = useNavigate();
    const brukAlternativSpinner = false

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [kontoListe, setKontoListe] = useState([])



    const hentKontoListe = (henterOk) => {
        setIsLoading(true)
        setError(false)
        setKontoListe([])

        getKontoliste(henterOk, 1000)
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

    const velgIkon = (kontoType) => {
        switch (kontoType) {
            case "BRUK":
                return <MynterTreStablerIkon/>
            case "SAVINGS":
            case "BSU":
                return <SparegrisIkon/>
            case "LOAN":
                return <HusIkon/>
            default:
                return <SporsmalstegnIkon/>
        }
    }

    const accountList =
        <div className="accountsContainer">
            {kontoListe.map((konto) => {
                return <IconCard
                    key={konto.accountNumber}
                    icon={velgIkon(konto.type)}
                    condensed={true}
                    className="accountCard"
                    onClick={()=> { navigate("./"+konto.accountNumber, { replace: false }) }}
                >
                    {({Title, Subtext}) => (
                        <>
                            <Title>{konto.name}</Title>
                            <Subtext>{konto.balance}</Subtext>
                        </>
                    )}
                </IconCard>
            })}
        </div>


    return (
        <div className="App">
            <Navigation/>
            <div>
                <Paragraph>Knapper for å styre datahenting i appen:</Paragraph>
                <SecondaryButton onClick={() => hentKontoListe(true)}>Kontoliste: ok</SecondaryButton>
                <SecondaryButton onClick={() => hentKontoListe(false)}>Kontoliste: error</SecondaryButton>
                <DividerLine/>
            </div>


            <Heading1>Oversikt</Heading1>
            <div>
                {isLoading && <MySpinner brukAlternativSpinner={brukAlternativSpinner}/>}
                {error && <MyErrorMessage errorMessage={errorMessage}/>}
                {accountList}
            </div>

        </div>
    )

}

export default MainPage;
