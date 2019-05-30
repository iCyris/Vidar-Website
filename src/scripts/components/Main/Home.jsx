import React from 'react'
import useTyped from './UseTyped'

const slogans = [
    "Please scroll to see more.",
    "Growing up with awe of technology.",
    "Those who seek truth must not be arrogant.",
    "As we do, as you know.",
]

export default (props) => {
    const sloganRef = React.useRef(null)

    useTyped(sloganRef, {
        strings: slogans,
        typeSpeed: 35,
        backSpeed: 30,
        startDelay: 0.36,
        loop: true
    })

    return (
        <div className="_home">
            <div className="home__subtitle">
                22594e13276480dd456a8441babc227b / ˈvidɑ:, tim
            </div>
            <div className="home__title">
                <div className="home__title-background" />
                <div className="home__title-wrap">
                    <div className="inner" />
                </div>
            </div>
            <div className="home__slogan">
                <span className="inner" ref={sloganRef} />
            </div>
        </div>
    )
}