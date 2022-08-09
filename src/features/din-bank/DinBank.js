import Navigation from "../../components/navigation";
import {Heading1} from "@sb1/ffe-core-react";

function DinBank() {
    return (
        <div className="App">
            <Navigation/>
            <Heading1 className="App-heading">Lag din egen oversikt</Heading1>
            {/*    For å få litt inspirasjon kan du se her https://design.sparebank1.no/profil/farger/ */}
            {/*    Vi har valgt ut et par komponenter vi mener er relevante

                    Her kan dere se hva slags typografi vi bruker i nettbanken: https://design.sparebank1.no/komponenter/kort/
                    Her kan dere se hvilke knapper vi har: https://design.sparebank1.no/komponenter/knapper/
                    Her kan dere se hvilke kort vi har: https://design.sparebank1.no/komponenter/kort/
                    Her kan dere se hvilke meldinger vi har: https://design.sparebank1.no/komponenter/meldinger/
                    Her finner du de ulike skjemaelementene: https://design.sparebank1.no/komponenter/skjemaelementer/
                    Grid brukes til å styre layouten på siden: https://design.sparebank1.no/komponenter/grid/
                    Dropdown brukes vi ofte for å velge konto: https://design.sparebank1.no/komponenter/dropdown/

                    På disse sidene vil det være masse eksempler som du kan kopiere og utforske. Dere må gjerne prøve å bytte farge for eksempel! :D
                */}
            {/*    Dere kan også prøve dere på å lage egne komponter og importere de. Se f.eks. bankkort-componenten under componentsmappen */}
        </div>
    );
}

export default DinBank;