import React, { useEffect, useState } from 'react'
import { usePopper } from 'react-popper'

export default (props) => {
    const [referenceElement, setReferenceElement] = useState(null)
    const [popperElement, setPopperElement] = useState(null)
    const [visible, setVisible] = useState(null)
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'top',
        modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10],
              },
            },
        ],  
    })
        
    useEffect(()=>{
        if(popperElement) {
            popperElement.focus()
        }
    }, [popperElement])

    const showPopper = (e) => {
        e.preventDefault()
        setVisible(true)
    }

    const hidePopper = (e) => {
        if(e.relatedTarget !== referenceElement){
            setVisible(false)
        } else {
            popperElement.focus()
        }
    }

    return (
        <div className="footer">
            <div className="_sns">
                <a
                    className="footer__sns-github"
                    href="https://github.com/vidar-team"
                    target="_blank"
                    title="GitHub"
                >
                    <i />
                </a>
                <a
                    className="footer__sns-weixin"
                    href="/#"
                    target="_blank"
                    title="WeiXin"
                    ref={setReferenceElement}
                    onClick={showPopper}
                >
                    <i />
                </a>
                { visible ? <div ref={setPopperElement} tabIndex="0" className="footer__popper" onBlur={hidePopper} style={styles.popper} {...attributes.popper}>
                    <img className="footer__qr-code" src={require("../../images/qrcode.png")} />
                </div> : null }
            </div>
            <div className="_contact">
                <div className="footer__line">
                    <div className="_line" />
                </div>
                <div className="footer__email">
                    <a href="mailto: public@vidar.club">public@vidar.club</a>
                </div>
                <div className="footer__beian">
                    <a href="http://beian.miit.gov.cn">皖ICP备16006627号</a>
                </div>
            </div>
        </div>
    )
}