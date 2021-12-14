import React,{useState,useEffect} from 'react'

const UseEff = () => {
    const [count, setCount] = useState(0)
    const[value, setValue]= useState(1)

    useEffect(()=>{
        alert("this is a effect")
    },[count])
    
    return (
        <>
            <center>
                <h2>{count}</h2>
                <button onClick={()=>setCount(count+1)}>Increase by 1</button>
                <hr/>
                <h2>{value}</h2>
                <button onClick={()=>setValue(value+2)}>Increase by 2</button>
            </center>
        </>
    )
}

export default UseEff
