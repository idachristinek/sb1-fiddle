import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/main.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from './App';
import Page2 from './Page2'
import MainPage from "./components/ExampleOverview/MainPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/2" element={<Page2 />} />
            <Route path="/3" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
);

