import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(20)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='row'>
                {posts.slice(0, limit).map((item) => (
                    <div className='col-3 border key={item.id}'>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
                <center>
                    {limit < posts.length &&
                        <button className='btn btn-warning my-2 p-3' onClick={() => setLimit(limit + 20)}>Load More</button>
                    }
                </center>
            </div>
        </>
    )
}

export default DataFetch
