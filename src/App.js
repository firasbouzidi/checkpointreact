import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Carousels from "./Component/Carousels"


function App() {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Oussema Hidri</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="#link">Resume</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <Carousels/>
        </div>
    );
}

export default App;
