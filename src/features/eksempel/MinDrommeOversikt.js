import {Heading2, Heading3} from "@sb1/ffe-core-react";
import {ButtonGroup, PrimaryButton} from "@sb1/ffe-buttons-react";
import CardExample from "../../components/card/CardExample";
import Bankkort from "../../components/bankkkort/Bankkort";
import Navigation from "../../components/navigation";
import {MynterTreStablerIkon, SparegrisIkon} from "@sb1/ffe-icons-react";

const MinDrommeOversikt = () => {
    //Lagt til et lite skall, men litt usikker på hva som skal være med?
    return (
        <div className="App">
            <div className="drommeoversikt_container">
                <Navigation/>
                <Heading2 lookLike={1} className="drommeoversikt_heading">
                    Min drømmeoversikt
                </Heading2>
                {/*Legge til eier?*/}
                <div>
                    {/*<div className="drommeoversikt_container">*/}
                    {/*    <Heading3>Hvor mye penger har jeg på konto?</Heading3>*/}
                    {/*    <Paragraph>4000 kr</Paragraph>*/}
                    {/*</div>*/}
                    <ButtonGroup>
                        <PrimaryButton onClick={f => f}
                                       className="drommeoversikt_primary-button">Overfør</PrimaryButton>
                        <PrimaryButton onClick={f => f} className="drommeoversikt_primary-button">Betal</PrimaryButton>
                    </ButtonGroup>
                </div>
                <div className="drommeoversikt_wrapper">
                    <div>
                        <Heading3 className="drommeoversikt_wrapper-heading">Mine kontoer</Heading3>
                        <CardExample subtext={4000} title={'Min brukskonto'} icon={<MynterTreStablerIkon/>}/>
                    </div>
                    <div>
                        <Heading3 className="drommeoversikt_wrapper-heading">Mine kort</Heading3>
                        <Bankkort penger={1000} navn={'Karianne'} kortnummer={'**** **** **** 1234'}/>
                    </div>
                    <div>
                        <Heading3 className="drommeoversikt_wrapper-heading">Min sparing</Heading3>
                        <CardExample subtext={4000} title={'Min sparekonto'} icon={<SparegrisIkon/>}/>
                    </div>
                </div>
                {/*Liste med transaksjoner?*/}
            </div>
        </div>
    );
}

export default MinDrommeOversikt;