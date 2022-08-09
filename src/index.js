import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/main.css';
import MainPage from './components/ExampleOverview/MainPage'
import {AccountDetails} from'./components/ExampleOverview/AccountDetails'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from './App';
import DinBank from './features/din-bank/DinBank'
import MinDrommeOversikt from "./features/eksempel/MinDrommeOversikt";
import Overfor from "./components/overforing/Overfor";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/din-bank" element={<DinBank/>}/>
            <Route path="/eksempel" element={<MinDrommeOversikt/>}/>
            <Route path="/overfor" element={<Overfor/>}/>
            <Route path="/3" element={<MainPage />} />
            <Route path="/3/:accountNumber" element={<AccountDetails />} />
        </Routes>
    </BrowserRouter>
);

