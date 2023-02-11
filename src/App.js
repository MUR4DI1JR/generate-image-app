import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GeneratePage from "./Pages/GeneratePage";
import Header from "./components/Header/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/generate-image' element={<GeneratePage/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;