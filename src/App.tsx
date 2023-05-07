import './assets/scss/my.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainHeader from "./layouts/MainHeader";
import RememberBirthdayView from "./views/RememberBirthdayView";
import OurToursView from "./views/OurToursView";
import JobsView from "./views/JobsView";

function App() {
    return (
        <>
            <BrowserRouter>
                <MainHeader/>
                <Routes>
                    <Route path="/" element={<RememberBirthdayView/>}/>
                    <Route path="/our-tours" element={<OurToursView/>}/>
                    <Route path="/jobs" element={<JobsView/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
