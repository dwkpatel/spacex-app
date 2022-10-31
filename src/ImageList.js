import React from "react";

function ImageList({title, latest}) {
    if (!latest) {
        return
    }
    const renderedList = latest.crew.map((c, index) => {
        // return <img key={index} src={image} alt="" />
        return <div>{c.role}</div>
    })    
    return (
        <>
            <h3>{title}</h3><br/>
            {renderedList}
        </>
    )
}

export default ImageList;