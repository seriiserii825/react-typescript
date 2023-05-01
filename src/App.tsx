import {useState} from 'react'
import './assets/scss/my.scss'
import MainHeader from "./layouts/MainHeader";
import RememberBirthdayView from "./views/RememberBirthdayView";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <MainHeader/>
            <RememberBirthdayView/>
        </>
    )
}

export default App
