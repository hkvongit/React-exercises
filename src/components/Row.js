import React from 'react'
import Columns from './Columns'
const Row = ({data}) => {
    return (
        <tr>
            <Columns data ={data}/>
        </tr>
    )
}

export default Row
