import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Member from './Member'
import Glory from './Glory'

export default withRouter((props) => {
    const pageID = {
        "/": "01",
        "/about": "02",
        "/member": "03",
        "/glory": "04"
    },
        pageArray = ["/", "/about", "/member", "/glory"]

    let currentPageID = pageID["/"],
        nextPage = "/about"

    const handleLocationChange = () => {
        let currentLocationPath = location.pathname

        switch (currentLocationPath) {
            case "/":
                currentPageID = pageID["/"]; nextPage = pageArray[1]
                break
            case "/about":
                currentPageID = pageID["/about"]; nextPage = pageArray[2]
                break
            case "/member":
                currentPageID = pageID["/member"]; nextPage = pageArray[3]
                break
            case "/glory":
                currentPageID = pageID["/glory"]; nextPage = pageArray[0]
                break
            default:
                currentPageID = pageID["/"]; nextPage = pageArray[0]
        }
    }

    handleLocationChange()

    const routePage = () => {
        props.history.push(nextPage)
        handleLocationChange()
    }

    return (
        <div className="main">
            <div className="_welcome">
                <div className="welcome__id">
                    <div className="id">
                        {currentPageID}
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

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/member" component={Member} />
                <Route exact path="/glory" component={Glory} />
                <Route component={Home}/>
            </Switch>
            <button className="_next" onClick={routePage} />
        </div>
    )
})