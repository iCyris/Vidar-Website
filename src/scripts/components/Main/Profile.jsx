import React from 'react'

export default (props) => {

    return (
        <a className="member__profile" href={props.url}>
            <div className="member__profile-avatar">
                <img src={props.avatar} alt={props.id}/>
                <span>{props.id}</span>
            </div>
            <div className="member__profile-intro">
                <p>{props.intro}</p>
            </div>
        </a>
    )
}