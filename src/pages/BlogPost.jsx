import React from 'react'
import { useParams } from 'react-router-dom'
import Construction from '../components/construction'

const BlogPost = () => {
  const { blogSlug } = useParams()
  
  return (
    <div>
      <Construction />
    </div>
  )
}

export default BlogPost
