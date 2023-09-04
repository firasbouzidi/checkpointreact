import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1530695440407-21fef47230b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="First slide"/>
                <Carousel.Caption>
                    <h3>Hello, I'm</h3>
                    <h1>Oussema Hidri</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide"/>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide"/>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;
