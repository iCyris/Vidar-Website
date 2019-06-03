import React, { useState } from 'react'

export default (props) => {
    const [dataState, setDataState] = useState("init")

    const handleClick = () => {
        (dataState === "close" || dataState === "init") ? setDataState("open") : setDataState("close")
    }

    return (
        <div className="menu">
            <div className="_button-wrap" onClick={handleClick}>
                <div className="inner menu__button-open">
                    <div />
                </div>
            </div>
            <div className="_content" data-state={dataState}>
                <div className="content__list">
                    <a
                        href="/"
                        className={location.pathname === "/" ? "current" : ""}
                    >
                        HOME
                    </a>
                    <a
                        href="/about"
                        className={location.pathname === "/about" ? "current" : ""}
                    >
                        ABOUT
                    </a>
                    <a
                        href="/member"
                        className={location.pathname === "/member" ? "current" : ""}
                    >
                        MEMBER
                    </a>
                    <a
                        href="/glory"
                        className={location.pathname === "/glory" ? "current" : ""}
                    >
                        GLORY
                    </a>
                </div>
            </div>
            <div className="_button-wrap" data-state={dataState}>
                <div className="inner menu__button-close" onClick={handleClick}>
                    <div className="ring" />
                    <div className="inner" />
                </div>
            </div>
        </div>
    )
}