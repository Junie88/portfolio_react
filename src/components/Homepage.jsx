import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";


function Home() {
  return (
    <div className='landingpage'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>⭐ </span></h2>
            <h2 className='nametext'>I'm Junie Halim</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/Junie88");
            }}
              className='socialmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/juniehalim/");
            }}
              className='socialmediabtn'><FaLinkedinIn className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home