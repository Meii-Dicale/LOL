import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand > <Link to={'./'}><img className="logo fontnav" src="./Lol_logo.png" alt="logo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4">
            <Link className='fontnav' to={'./'}>Accueil</Link>
            <Link className='fontnav' to={'./persos'}>Personnages</Link>
            <Link className='fontnav' to={'./items'}>Objets</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;