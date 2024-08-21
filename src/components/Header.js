import React from "react";

import logo from '../assets/logo.svg';

import headerLogo from '../assets/topLogo.svg';

function Header() {

    return(
        <div className="header">

            <div className="wrapper">
                <div className="header-logo">
                    <img src={headerLogo} />
                </div>
                <div className="middle-section">
                    <p>افزودن پلاک</p>
                    <p>کیف پول</p>
                    <p>سوابق تراکنش</p>
                </div>
                <div className="left-section">
                    <div className="app-dl-wrapper header-btn">
                        <p>دانلود اپلیکیشن</p>
                        <img src={logo}/>
                    </div>
                    <div className="app-dl-wrapper header-btn">
                        <p>کیف پول</p>
                      
                    </div>
                    <div className="app-dl-wrapper header-btn">
                        <p>علی یوسفی</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;