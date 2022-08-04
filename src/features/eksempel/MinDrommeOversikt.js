import {Heading1, Heading3} from "@sb1/ffe-core-react";
import {ButtonGroup, ShortcutButton} from "@sb1/ffe-buttons-react";
import CardExample from "../../components/card/CardExample";
import Bankkort from "../../components/bankkkort/Bankkort";
import Navigation from "../../components/navigation";
import {MynterTreStablerIkon, SparegrisIkon} from "@sb1/ffe-icons-react";
import {accounts} from "../../components/overforing/kontoer";
import {formatNumber} from "@sb1/ffe-formatters";

const MinDrommeOversikt = () => {
    const brukskontoer = accounts.filter((account) => account.type === 'brukskonto');
    const sparekontoer = accounts.filter((account) => account.type === 'sparekonto' || account.type === 'bsu');

    return (
        <div className="App">
            <div className="drommeoversikt_container">
                <Navigation/>
                <header>
                    <Heading1 className="drommeoversikt_heading">
                        Min drømmeoversikt
                    </Heading1>
                    <div>
                        <ButtonGroup>
                            <ShortcutButton element="a" href="/overfor"
                                            className="drommeoversikt_shortcut-button">Overfør</ShortcutButton>
                            {/*Kanskje man kan legge til en knapp til? F.eks betal */}
                        </ButtonGroup>
                    </div>
                    <div className="drommeoversikt_wrapper">
                        <div>
                            {/*Dette viser alle brukskonter man har*/}
                            <Heading3 className="drommeoversikt_wrapper-heading">Mine kontoer</Heading3>
                            {brukskontoer.map((brukskonto) =>
                                <CardExample subtext={formatNumber(brukskonto.balance)} title={brukskonto.name}
                                             icon={<MynterTreStablerIkon/>}/>
                            )}
                        </div>
                        <div>
                            <Heading3 className="drommeoversikt_wrapper-heading">Mine kort</Heading3>
                            <Bankkort penger={1000} navn={'Karianne'} kortnummer={'**** **** **** 1234'}/>
                        </div>
                        <div>
                            {/*Dette viser alle sparekontoer man har*/}
                            <Heading3 className="drommeoversikt_wrapper-heading">Min sparing</Heading3>
                            {sparekontoer.map((sparekonto) =>
                                <CardExample subtext={formatNumber(sparekonto.balance)} title={sparekonto.name}
                                             icon={<SparegrisIkon/>}/>
                            )}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default MinDrommeOversikt;