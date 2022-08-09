import React from 'react';
import {Heading2} from "@sb1/ffe-core-react";
import {IconCard} from "@sb1/ffe-cards-react";
import {useNavigate} from "react-router-dom";
import {HusIkon, MynterTreStablerIkon, SparegrisIkon, SporsmalstegnIkon} from "@sb1/ffe-icons-react";
import {formatNumber} from "@sb1/ffe-formatters";

export const ListeMedCards = ({kontoer, heading}) => {

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
            kontoer.length > 0 &&
            <div className="liste-med-cards-container">
                <Heading2 className="drommeoversikt_wrapper-heading" lookLike={3}>{heading}</Heading2>
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
                                <Subtext>{formatNumber(konto.balance)}</Subtext>
                            </>
                        )}
                    </IconCard>
                })}
            </div>
        )
    }
;

export default ListeMedCards;