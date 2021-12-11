import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NotFound from "./components/notFound";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import { createStore } from 'redux';
import reducers from './redux/reducers'
import {Provider} from "react-redux";

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
