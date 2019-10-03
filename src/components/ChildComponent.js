import React from 'react'

const ChildComponent = (props) => {
    let childName='hari'
    return (
        <button onClick={()=>props.greetParentHandler(childName)}>Child Button</button>
    )
}

export default ChildComponent
