import {IconCard} from "@sb1/ffe-cards-react";
import {SparegrisIkon} from "@sb1/ffe-icons-react";

function CardExample() {
    return (
        <div>
            <IconCard icon={<SparegrisIkon/>} condensed={true}>
                {({Title, Subtext}) => (
                    <>
                        <Title>Sparekonto ungdom</Title>
                        <Subtext>7 004,00</Subtext>
                    </>
                )}
            </IconCard>
        </div>
    );
}

export default CardExample;