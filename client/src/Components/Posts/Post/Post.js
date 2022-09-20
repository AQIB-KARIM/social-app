import React from 'react'
import { Card, Button } from 'react-bootstrap'
import moment from 'moment/moment'
import { FaRegThumbsUp } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Post = ({ post }) => {
  console.log(post, "POST PAGE")


  // console.log(moment(moment.duration(now.diff(then))).fromNow())

  console.log(moment.utc(post.createdAt).local().format('hh:mm:ss [GMT]Z'),"MOMENT")
  console.log(post.createdAt)

  return (
    <Card>
      <Card.Img variant="top" src={post.selectedFile} />
      <Card.Body>
        <span style={{ color: "grey", fontSize: '14px' }}>
          {
            post?.tags?.map((tag) => `#${tag}`)
          }
        </span>
        <Card.Title className='mt-3'>{post.title}</Card.Title>
        <Card.Text>
          {post.message}
        </Card.Text>
        <p>Creator: {post.creator}</p>
        <p style={{fontSize:"14px", color:"grey"}}>Posted At: {moment(post.createdAt).fromNow()}</p>
        
        <div className='like_delete_container'>
          <div>
            <span>
              <FaRegThumbsUp /> Like {post.likeCount}
            </span>

          </div>

          <div>
            <span>
              <MdDelete /> Delete
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Post
