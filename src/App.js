import Navigation from "./components/navigation";
import {Heading1, Heading2, Paragraph} from "@sb1/ffe-core-react";
import {Grid, GridCol, GridRow} from "@sb1/ffe-grid-react";
import katten from "./katten.svg";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <header className="App-header">
                <Heading1 className="App-heading">Velkommen til din drømmebank!</Heading1>
                <Grid>
                    <GridRow>
                        <GridCol sm={12} lg={{cols: 6, offset: 3}}>
                            <div className="App-wrapper">
                                <Heading2 lookLike={4}>Din bank</Heading2>
                                <Paragraph textLeft={true}>
                                    Under "Din bank" i menyen skal du lage din helt egen bank. Der er det du som
                                    bestemmer
                                    hva som
                                    burde være med i en bank. Alt er lov!
                                </Paragraph>
                            </div>
                            <div className="App-wrapper">
                                <Heading2 lookLike={4}>Eksempler</Heading2>
                                <Paragraph textLeft={true}>
                                    Under "Eksempler" i menyen, finner du inspirasjon og forslag til ting du kan ta med
                                    i
                                    banken
                                    din. Her kan du ta ting inn i din bank eller gjøre om på de, så det blir unikt for
                                    deg.
                                </Paragraph>
                            </div>
                        </GridCol>
                    </GridRow>
                </Grid>
                <img src={katten} alt="Katten" className="App-katten"/>
            </header>
        </div>
    );
}

export default App;
