import {useState} from "react";
import {Input, InputGroup} from "@sb1/ffe-form-react";
import {AccountSelector} from "@sb1/ffe-account-selector-react";
import Navigation from "../navigation";
import {Heading2} from "@sb1/ffe-core-react";
import {accounts} from "./kontoer";
import {Grid, GridCol, GridRow} from "@sb1/ffe-grid-react";

const Overfor = () => {
    const [selectedAccount1, setSelectedAccount1] = useState();
    const [selectedAccount2, setSelectedAccount2] = useState();
    const [showErrors, setShowErrors] = useState(false);

    const label1 = 'label1';
    const label2 = 'label2';
    return (
        <div className="App">
            <div className="drommeoversikt_container">
                <Navigation/>
                {/*tilbakeknapp*/}
                <Heading2 lookLike={1} className="drommeoversikt_heading">
                    Overfør mellom kontoer
                </Heading2>
                <Grid>
                    <GridRow>
                        <GridCol sm={12} lg={{cols: 6, offset: 3}}>
                            <InputGroup label="Fra konto" extraMargin={false} labelId={label1}>
                                <AccountSelector
                                    accounts={accounts}
                                    id="account-selector-single"
                                    locale="nb"
                                    labelledById={label1}
                                    onAccountSelected={val => setSelectedAccount1(val)}
                                    onReset={() => setSelectedAccount1(null)}
                                    selectedAccount={selectedAccount1}
                                    ariaInvalid={false}
                                />
                            </InputGroup>
                            <InputGroup label="Til konto" extraMargin={false} labelId={label2}>
                                <AccountSelector
                                    accounts={accounts}
                                    id="account-selector-single"
                                    locale="nb"
                                    labelledById={label2}
                                    onAccountSelected={val => setSelectedAccount2(val)}
                                    onReset={() => setSelectedAccount2(null)}
                                    selectedAccount={selectedAccount2}
                                    ariaInvalid={false}
                                />
                            </InputGroup>
                            <InputGroup
                                label="Beløp"
                                fieldMessage={showErrors ? 'Ugyldig beløp' : null}
                            >
                                <Input/>
                            </InputGroup>
                        </GridCol>
                    </GridRow>
                </Grid>
            </div>
        </div>
    );
};

export default Overfor;