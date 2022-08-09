import {ErrorMessage} from '@sb1/ffe-message-box-react';
import {Paragraph} from "@sb1/ffe-core-react";

export const MyErrorMessage = ({errorMessage}) => {
    return (
        <ErrorMessage className="errorMessage" title="Oi!">
            <Paragraph>
                {errorMessage}
            </Paragraph>
        </ErrorMessage>
    )
}