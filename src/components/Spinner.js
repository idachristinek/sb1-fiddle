import Spinner from '@sb1/ffe-spinner-react';


export const MySpinner = ({brukAlternativSpinner}) => {
    const alternativeSpinner =
        <img src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif" className="alternativeSpinner"
             alt="alternativeSpinner"/>

    return (
        <div className="loading">
            {brukAlternativSpinner ? alternativeSpinner : <Spinner large immediate/>}
        </div>
    )
}