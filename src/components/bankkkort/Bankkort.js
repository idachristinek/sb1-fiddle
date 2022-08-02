import {Paragraph, SmallText} from "@sb1/ffe-core-react";

const Bankkort = ({penger, navn, kortnummer}) => (
    <div className="bankkort_container">
        <Paragraph className={'ffe-h4'}>{penger} kr</Paragraph>
        <SmallText>{navn}</SmallText>
        <SmallText>{kortnummer}</SmallText>
    </div>
);

export default Bankkort;