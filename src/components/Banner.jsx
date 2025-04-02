import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons"
import samDiana from '../assets/img/SamDiana.png';

 const Banner=()=>{
    return (
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to Cronials World</span>
                <h1>{'Welcome'}<span className="wrap">!</span></h1>
                <p>A battle field of the brave warriers protecting their land</p>
                <button onClick={()=>console.log('connect')}>Let's Play<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={7}>
                <img src={samDiana} alt="Header img"/>
                </Col>
            </Row>
        </Container>
        </section>
    )
 }
 export default Banner;