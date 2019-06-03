import React from 'react'
import member_info from '../../config/member.js'

export default (props) => {
    const memberProfile = member_info.map( member =>
        <div className="profile" key={member.id}>
            <a className="member__avatar"
               href={member.url}
               title={member.id}
               target="_blank"
            >
                <img title={member.id} src={member.avatar} />
                <span>{member.id}</span>
            </a>
            <div className="member__intro">
                <p
                    dangerouslySetInnerHTML={{
                        __html:
                        member.intro
                    }}
                />
            </div>
        </div>
    )

    return (
        <section className="_member">
            <div className="member__line-start" />
            <div className="member__content">
                <h2>Member</h2>
                {memberProfile}
            </div>
            <div className="member__line-end" />
        </section>
    )
}