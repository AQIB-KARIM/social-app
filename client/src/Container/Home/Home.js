import React,{useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Home.scss';
import Posts from '../../Components/Posts/Posts'
import Form from '../../Components/Form/Form'
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const dispatch = useDispatch() 

    useEffect(()=>{
      dispatch(getPosts())
    },[dispatch])

    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className='memories_container'>
                            <Posts/>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className='memories_container'>
                           <Form/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
