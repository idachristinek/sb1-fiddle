import {IconCard} from "@sb1/ffe-cards-react";

const CardExample = ({icon, title, subtext}) => (
    <div>
        <IconCard icon={icon} condensed={true}>
            {({Title, Subtext}) => (
                <>
                    <Title>{title}</Title>
                    <Subtext>{subtext}</Subtext>
                </>
            )}
        </IconCard>
    </div>
);

export default CardExample;