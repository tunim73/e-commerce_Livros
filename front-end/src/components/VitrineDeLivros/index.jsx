import Carousel from 'react-bootstrap/Carousel'
import style from './VitrineDeLivros.module.scss'
//import 'bootstrap/dist/css/bootstrap.css';

const VitrineDeLivros = () => {
  return (  


    <div className={style.containerCarousel}>
      <Carousel variant="dark">
      <Carousel.Item interval={200}>
        <img
          className="d-block w-100"
          src="/public/assets/capaDeLivros/Guerra dos tronos.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/assets/capaDeLivros/Guerra dos tronos 2.jpg.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/public/assets/capaDeLivros/Guerra dos tronos 5.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  ) 
}

export default VitrineDeLivros;