
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.jpeg'
import { useLocation } from 'react-router-dom'


function NavBarMenu() {

    const location = useLocation()

    const handleActiveRoute = (route) => {

        if (route == location.pathname) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <Navbar collapseOnSelect className='navmenuscomp' expand="lg" variant="dark">
            <Container>

                <Navbar.Brand href="/" className='text-uppercase p-3'>
                <img src={Logo}
                    // height={/}
                    width={60}
                    alt="logo"
                />

                    Fitmatters</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active={handleActiveRoute("/")} >Home</Nav.Link>
                        <Nav.Link href="/products" active={handleActiveRoute("/products")}>Products</Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="/contact" active={handleActiveRoute("/contact")}>
                            Reach Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarMenu;