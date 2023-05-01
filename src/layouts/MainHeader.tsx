import React from 'react';
import {Link} from "react-router-dom";

function MainHeader() {
    return (
        <div className={'main-header'}>
            <h1 className={'main-header__logo'}>React TypeScript</h1>
            <ul className="main-menu">
                <Link to="/">Remember Birthday</Link>
                <Link to="/our-tours">Our Tours</Link>
            </ul>
        </div>
    );
}

export default MainHeader;