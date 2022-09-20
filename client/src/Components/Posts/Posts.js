import React from 'react'
import { Spinner } from 'react-bootstrap'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import './Posts.scss'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  return (
    posts.length === 0 ?
      <div className='spinner_container'>
        <Spinner style={{ width:'4rem', height:'4rem' }} animation="border" role="status" />
      </div> : (
        <div className='posts_grid_container'>
          {
            posts.data?.map((post) => (
              <div className='post-cards' key={post._id}>
                <Post post={post} />
              </div>
            ))
          }
        </div>
      )
  )
}

export default Posts
