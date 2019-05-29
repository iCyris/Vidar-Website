import React from 'react'

export default (props) => (
    <div className="header">
        <div className="_logo">
            <a className="header__logo" href="/" />
            <a className="header__name" href="/">
                <div>VidarTeam</div>
            </a>
        </div>
        <div className="_binary">
            <div className="header__binary">
                {/* ASCII('V') => binary */}
                <span className="one">1</span>
                <span className="one">1</span>
                <span className="zero">0</span>
                <span className="zero">0</span>
                <span className="one">1</span>
                <span className="one">1</span>
                <span className="zero">0</span>
            </div>
        </div>
    </div>
)