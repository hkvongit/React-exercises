import React from 'react'
import ChildComponent from './ChildComponent'


const ParentComponent = () => {
    let ParentName = 'Vijayakumar'
    const greetParent = (childName) =>{
        alert(`hello here is the greeting to ${ParentName} from ${childName}`)
    }
    return (
        <div>
            <ChildComponent greetParentHandler = {greetParent}/>
        </div>
    )
}

export default ParentComponent
