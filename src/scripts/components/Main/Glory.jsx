import React from 'react'
import glory_info from '../../config/glory'

export default (props) => {

    glory_info.reverse()

    const tBody = glory_info.map( item =>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.time}</td>
            <td>{item.name}</td>
            <td>{item.result}</td>
        </tr>
    )

    return (
        <section className="_glory">
            <table className="table">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>时间</th>
                        <th>比赛</th>
                        <th>名次</th>
                    </tr>
                </thead>
                <tbody>
                    {tBody}
                </tbody>
            </table>
        </section>
    )
}