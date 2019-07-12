import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return <div className="HeaderContainer">
        <ImageThumbnail/>
        <div className="headerText">
            <HeaderTitle/>
            <HeaderContent/>
        </div>
    </div>
    // console.log(<HeaderContent/>);
}

export default HeaderContainer; 