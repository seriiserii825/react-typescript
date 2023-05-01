import React from 'react';

function MainHeader() {
    return (
        <div className={'main-header'}>
            <h1 className={'main-header__logo'}>React TypeScript</h1>
            <ul className="main-menu">
                <li>Remember birthday</li>
            </ul>
        </div>
    );
}

export default MainHeader;