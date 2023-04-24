import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const { id } = useParams()
    return (
        <div>PostDetails for book {id}</div>
    )
}

export default PostDetails