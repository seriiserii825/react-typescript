import './assets/scss/my.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainHeader from "./layouts/MainHeader";
import RememberBirthdayView from "./views/RememberBirthdayView";
import OurToursView from "./views/OurToursView";

function App() {
    return (
        <>
            <BrowserRouter>
                <MainHeader/>
                <Routes>
                    <Route path="/" element={<RememberBirthdayView/>}/>
                    <Route path="/our-tours" element={<OurToursView/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
