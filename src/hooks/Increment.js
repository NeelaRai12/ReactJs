import React, { useState } from 'react'

const Increment = () => {
    const [count, setCount] = useState(0)
    // count -> variable name
    // setCount -> function which changes the state of the variable ie. count in this case
    // 0 is the initial value of count variable

    // const increase=()=>(
    //     setCount(count+1)
    // )
    return (
        <>
            <h2 className='text-center'>{count}</h2>
            <center>
                <button className='btn btn-primary'
                    onClick={() => setCount(count + 1)}>
                    Increase
                </button>

                &nbsp;&nbsp;

                {
                    count > 0 &&
                    <button className='btn btn-danger'
                        onClick={() => setCount(count - 1)}>
                        Decrease
                    </button>
                }
            </center>

        </>
    )
}

export default Increment
