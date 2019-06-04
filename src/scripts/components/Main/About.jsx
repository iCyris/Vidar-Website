import React from 'react'
import about_info from '../../config/about.json'

export default (props) => {

    const focus = about_info.focus.map(item =>
        <li key={item}>
            <p>{item}</p>
        </li>
    )

    return (
        <section className="_about">
            <div className="about__square">
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
            <div className="about__article">
                <h2 className="about__article-title">
                    <span>About</span>
                </h2>

                <div className="about__article-body">
                    <div className="about__article-part1 about__article-content">
                        <h4 className="title">
                            <strong>简介</strong>
                        </h4>
                        <p className="intro">
                            {about_info.intro}
                        </p>
                    </div>

                    <div className="about__article-part2 about__article-content">
                        <h4 className="title">
                            <strong>研究领域</strong>
                        </h4>
                        <ul>
                            {focus}
                        </ul>
                    </div>

                    <div className="about__article-part3 about__article-content">
                        <h4 className="title">
                            <strong>项目</strong>
                        </h4>
                        <ul>
                            {about_info.project}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}