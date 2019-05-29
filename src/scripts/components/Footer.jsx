import React from 'react'

export default (props) => (
    <div className="footer">
        <div className="_sns">
            <a className="footer__sns-github" href="https://github.com/vidar-team" target="_blank">
                <i />
            </a>
            <a className="footer__sns-weibo" href="https://weibo.com/HDUISA" target="_blank">
                <i />
            </a>
        </div>
        <div className="_contact">
            <div className="footer__line">
                <div className="_line" />
            </div>
            <div className="footer__email">
                <a href="mailto: public@vidar.club">public@vidar.club</a>
            </div>
        </div>
    </div>
)