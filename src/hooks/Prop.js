import React from 'react'

const Prop = (props) => {
    const {language,tech}=props
    return (
        <>
           <h2>We are learning {language}. It is used for {tech}.</h2> 
        </>
    )
}

export default Prop
