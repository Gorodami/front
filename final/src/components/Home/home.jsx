import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
    <>

    <div>
        <div>
            <h1>Bienvenidos a Verduleria Tutti-Frutti</h1>
            <h5>Pedí desde la comodidad de tu casa</h5>
            <p>Conocé todas nuestras ofertas!</p>
        </div>
    </div>

    <div className='borderCarousel'>
        <Carousel>
            <Carousel.Item>
                <img src="img/carrousel/campo.jpg" alt="Imagen1" />
            </Carousel.Item>
            <Carousel.Item>
            <img src="img/carrousel/tractor.jpg" alt="Imagen2" />
            </Carousel.Item>
            <Carousel.Item>
            <img src="img/carrousel/verduleria.jpg" alt="Imagen3" />
            </Carousel.Item>
        </Carousel>
    </div>
    </>


  )
}

export default Home;
