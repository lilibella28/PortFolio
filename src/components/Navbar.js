import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../Assets/logo.png';
import Picture2 from '../Assets/bodypic.webp';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { CgFileDocument, CgClipboard } from 'react-icons/cg';

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const handleScroll = () => setNavColour(window.scrollY >= 20);

  window.addEventListener('scroll', handleScroll);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/' className='d-flex'>
          <img
            src={logo}
            width='200'
            height='100'
            className='img-fluid logo'
            alt='brand'
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => setExpand(prevExpand => !prevExpand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/'
                onClick={() => setExpand(false)}
              >
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/about'
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/project'
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to='/resume'
                onClick={() => setExpand(false)}
              >
                <CgFileDocument style={{ marginBottom: '2px' }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
