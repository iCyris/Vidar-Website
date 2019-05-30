import React from 'react'
import useTyped from './UseTyped'

const slogans = [
    "As we do, as you know.",
    "Growing up with awe of technology.",
    "Those who seek truth must not be arrogant."
]

export default (props) => {
    const sloganRef = React.useRef(null)

    useTyped(sloganRef, {
        strings: slogans,
        typeSpeed: 35,
        backSpeed: 25,
        startDelay: 400,
        backDelay: 800,
        loop: true
    })

    return (
        <section className="_home">
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
        </section>
    )
}