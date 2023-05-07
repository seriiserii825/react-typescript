import React from 'react';
import {Link} from "react-router-dom";
import {EMenu} from "../enum/EMenu";

function MainHeader() {
    return (
        <div className={'main-header'}>
            <h1 className={'main-header__logo'}>React TypeScript</h1>
            <ul className="main-menu">
                <Link to={EMenu.REMEMBERBIRTHDAY}>Remember Birthday</Link>
                <Link to={EMenu.OURTOURS}>Our Tours</Link>
                <Link to={EMenu.JOBS}>Jobs</Link>
            </ul>
        </div>
    );
}

export default MainHeader;