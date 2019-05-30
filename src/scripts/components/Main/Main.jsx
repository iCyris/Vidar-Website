import React from 'react'
import Home from './Home'

export default (props) => {

    return (
        <div className="main">
            <div className="_welcome">
                <div className="welcome__id">
                    <div className="id">

                    </div>
                    <div className="_line" />
                </div>
                <div className="welcome__text">
                    WELCOME
                </div>
            </div>
            <div className="_links">
                <a className="link__item" href="/">
                    Home
                </a>
                <span>/</span>
                <a className="link__item" href="https://drops.vidar.club/" target="_blank">
                    Drops
                </a>
                <span>/</span>
                <a className="link__item" href="https://ctf.vidar.club/" target="_blank">
                    CTF
                </a>
                <span>/</span>
                <a className="link__item" href="https://wiki.vidar.club/" target="_blank">
                    Wiki
                </a>
                <span>/</span>
                <a className="link__item" href="https://reg.vidar.club/" target="_blank">
                    Join us
                </a>
            </div>
            <Home />
            <button className="_next">

            </button>
        </div>
    )
}