import React, { useState,useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Form.scss';
import { useDispatch } from 'react-redux';
import { createPost, getPosts } from '../../actions/posts';
import FileBase from 'react-file-base64';
import { errorNotify, successNotify } from '../../utils/Toastify';

const Form = () => {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ''
  })
  
  useEffect(()=>{
    dispatch(getPosts())
  },[postData,setPostData])

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(postData.creator !== '' && postData.message !== '' && postData.tags !== '' && postData.selectedFile !== '' && postData.title !== ''){
      dispatch(createPost(postData))
      successNotify("Memory Created Successfully")
      setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ''
      })      
    }
    else{
      errorNotify("Plese fill in all fields")
    } 
  }

  const clear = () => {
    setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ''
      })
  }

  console.log(postData)

  return (
    <div className='form_main'>
      <Container>
        <form onSubmit={handleSubmit}>
          <h4>Creating a Memory</h4>
          <Row>
            <Col md={12}>
              <label>Creator</label>
              <input className='form-control' value={postData.creator} name='creator' onChange={handleChange} placeholder='Enter creators name' type={'text'} />
            </Col>

            <Col md={12}>
              <label>Title</label>
              <input className='form-control' value={postData.title} name='title' onChange={handleChange} placeholder='Enter title' type={'text'} />
            </Col>

            <Col md={12}>
              <label>Message</label>
              <input className='form-control' value={postData.message} name='message' onChange={handleChange} placeholder='Enter message' type={'text'} />
            </Col>

            <Col md={12}>
              <label>Tags</label>
              <input className='form-control' value={postData.tags} name='tags' onChange={handleChange} placeholder='Enter tags' type={'text'} />
            </Col>

            <Col md={12}>
              <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} value={postData.selectedFile} />
            </Col>

            <Col md={12}>
              <button className='submit_btn' type='submit'>Submit</button>
            </Col>

            <Col md={12}>
              <button className='reset_btn' onClick={() => clear()}>Reset</button>
            </Col>


          </Row>
        </form>
      </Container>
    </div>
  )
}

export default Form
