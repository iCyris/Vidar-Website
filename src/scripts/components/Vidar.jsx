import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main/Main'
import Menu from './Menu'
import Footer from './Footer'

export default () => (
    <div className="vidar-team">
        <Header />
        <Router>
            <Main />
            <Menu />
        </Router>
        <Footer />
    </div>
)