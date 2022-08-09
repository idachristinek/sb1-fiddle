import React from 'react';
import {Heading3} from "@sb1/ffe-core-react";
import {MyErrorMessage} from "../../components/ErrorMessage";
import {IconCard} from "@sb1/ffe-cards-react";
import {useNavigate} from "react-router-dom";
import {HusIkon, MynterTreStablerIkon, SparegrisIkon, SporsmalstegnIkon} from "@sb1/ffe-icons-react";

export const ListeMedCards = ({kontoer, heading, error, errorMessage}) => {

        let navigate = useNavigate();
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
        return (
            <div className="liste-med-cards-container">
                <Heading3 className="drommeoversikt_wrapper-heading">{heading}</Heading3>
                {error && <MyErrorMessage errorMessage={errorMessage}/>}
                {kontoer.map((konto) => {
                    return <IconCard
                        key={konto.accountNumber}
                        icon={velgIkon(konto.type)}
                        condensed={true}
                        className="accountCard"
                        onClick={() => {
                            navigate("./" + konto.accountNumber, {replace: false})
                        }}
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
        )
    }
;

export default ListeMedCards;