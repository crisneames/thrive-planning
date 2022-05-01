import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { CompanySignUpPath, LoginPath } from '../../routes/paths';

const ThrivePlanningNavbar = () => {

    return (
        <Navbar expand="lg" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href="/" className='font-face-gm'>
                    <img
                        alt=""
                        src="/brand.png"
                        width="32"
                        height="32"
                        className="d-inline-block align-top"
                    />{' '}
                    THRĪV Plan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto">
                        <Nav.Link href={CompanySignUpPath} className='font-face-gm'>Register as Employer?</Nav.Link>
                    </Nav>
                    <Button href={CompanySignUpPath} className='font-face-gm'>Register as Employer</Button>
                    <Button href={LoginPath} className='mx-2 font-face-gm'>Get Started</Button>
                </Navbar.Collapse>
                {/* <Navbar.Collapse className="justify-content-end">
                    // If we get to having user signed in, and needing to sign out, here is a place for it
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

export default ThrivePlanningNavbar;
