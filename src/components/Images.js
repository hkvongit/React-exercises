import React from 'react'

const Images = (props) => {
    console.log(`image array ${props.imageArray}`)
    return (
        <div>
            hi these are images
           {props.imageArray} 
            {props.imageArray.map(image=>{
                return(
                    <div>
                        <img alt="#"src={image.urls.small}/>
                        <p>{image.urls.small}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Images
