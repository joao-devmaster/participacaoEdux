import React from 'react';
import {Carousel, Container, Row, Col, Card, Button, ProgressBar, Jumbotron, Image, Toast} from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './home.css';





const Home = () => {

    return(
       <div>
          
           <Carousel className='text-center'>
        <Carousel.Item>
          <img
            className="d-block-w-100"
            style={{width:'1350px'}} src="https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Conheça nossas unidades</h3>
            <p>Os melhores cursos de desenvolvimento</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
          <img
            className="d-block-w-100"
            style={{width:'1350px'}}  src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg"           
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Desenvolvimento de sistemas</h3>
            <p>inscrições abertas para 2021</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block-w-100"
            style={{width:'1350px'}}  src="https://media.istockphoto.com/photos/artificial-intelligence-picture-id1198086928?b=1&k=6&m=1198086928&s=170667a&w=0&h=sVjmpLeWonmh1PlHnTksceI74fdswnpUfNqFtmS91Sw="            
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Machine learning</h3>
            <p>inscrições abertas para 2021</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
      <Jumbotron fluid>
  <Container className="text-center">
    <h1>Cursos mais concorridos</h1>
    <p>
      Vá em uma das nossas escolas para participar do processo seletivo EDUX
    </p>
  </Container>
</Jumbotron>
      </div>

      <div>
      <Container className="text-center"> 
    <Row>
        <Col sm> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.healthcatalyst.com/wp-content/uploads/2017/04/machine-learning-in-healthcare.jpg" />
        <Card.Body>
            <Card.Title>Machine learning</Card.Title>
            
            <Card.Text>
            Machine Learning é uma tecnologia onde os computadores tem a capacidade de aprender de acordo com as respostas esperadas por meio associações de diferentes dados, os quais podem ser imagens, números e tudo que essa tecnologia </Card.Text>
            
            
            
            
        </Card.Body>
        </Card> </Col>

        <Col sm> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: '18em' }}  src="https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ" />
        <Card.Body>
            <Card.Title>Desenvolvimento de sistemas</Card.Title>
            <Card.Text>
            A Análise e Desenvolvimento de Sistemas é a área profissional responsável por dar uma solução informatizada a um problema, como a criação de um software, um aplicativo ou um banco de dados.

            </Card.Text>
           
        </Card.Body>

       </Card> </Col>

        <Col sm><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" style={{ height: '18em' }} src="https://bs2.com.co/wp-content/uploads/2019/10/redes-bs2sas-600x400.jpg" />
  <Card.Body>
    <Card.Title>Redes de computadores</Card.Title>
    <Card.Text>
    O objetivo do curso é formar profissionais que saibam configurar e administrar serviços de redes, prover a infraestrutura necessária para ambientes físicos, virtuais e disponibilizados na nuvem, bem como garantir a conectividade entre dispositivos.
      </Card.Text>
      
    </Card.Body>
  </Card></Col>
      </Row>
      </Container>
      </div>

      <div class='palestra'>
      <Jumbotron fluid>
    <Container className="text-center">
      <h1>Palestras anualmente com os principais CEOs do mundo</h1>
      <p>
       Esse ano a palestra sera ministrada por mark zuckerberg, CEO do Facebook.
      </p>
    </Container>
    <Container className="text-center">
  <Row>
    <Col xs={6} md={4}>
      <Image className="text-center" style={{width:'180px', height: '174px'}} src="https://th.bing.com/th/id/OIP.A9rM_CBm0Y24dqsKR7n6DwHaFj?pid=Api&w=1136&h=852&rs=1" roundedCircle />
      <strong><p>Mark zuckerberg </p></strong>
    </Col>
    <Col xs={6} md={4}>
      <Image className="text-center" style={{width:'180px', height: '174px'}} src="https://th.bing.com/th/id/OIP._g5QnWRNnrGpAqjfCGecGgHaHa?pid=Api&rs=1" roundedCircle />
      <strong><p>Bill gates </p></strong>
    </Col>
    <Col xs={6} md={4}>
      <Image className="text-center" style={{width:'180px', height: '174px'}} src="https://www.biography.com/.image/t_share/MTE1ODA0OTcxOTUyMDE0ODYx/elon-musk-20837159-1-402.png" roundedCircle />
      <strong><p>Elon musk </p></strong>
    </Col>
    
  </Row>
</Container>
</Jumbotron>
     

    
      </div>
   
     
       </div>


       
        
    )
    
}

export default Home;