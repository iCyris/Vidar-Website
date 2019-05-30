import React from 'react'
import Typed from 'typed.js'

const useRerender = () => {
    const [flag, setFlag] = React.useState(true)
    return () => setFlag(!flag)
}

const useTyped = (ref, options) => {
    const instance = React.useRef(null)
    const rerender = useRerender()

    React.useEffect(() => {
        if (ref.current === null) return
        ;instance.current = new Typed(ref.current, options)
        ;rerender()

        return () => instance.current.destroy()
    }, [ref])

    return instance.current
}

export default useTyped