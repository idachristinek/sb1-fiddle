import {useParams } from 'react-router-dom';
import Navigation from '../navigation';

export const AccountDetails = () => {

    let { accountNumber } = useParams();

    return (
        <div className="App">
            <Navigation/>
            Kontoinfo for {accountNumber}
        </div>
    )
}