import { React, useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from 'react-bootstrap';


const Header = (props) => {

    const { title, menu, social } = { ...props };
    const [userText, setUserText] = useState('');;

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let stickHeader = e.target.documentElement.scrollTop > 50;
            setUserText(stickHeader)
        });
    })

    return <header id="header" className={userText ? 'header-top' : 'header'}>
        <Container className="px-lg-5">
            <h1><a href="/">{title}</a></h1>
            <h2>I'm an <span>Artist</span> from India</h2>
            <Navbar variant="dark" className="mr-auto" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {menu.map((item, index) => {
                            return <Nav.Link key={index} href={item.href}>{item.name}</Nav.Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <div>
                {social.map((item, index) => {
                    return <a key={index} href={item.link} className={'px-2 fa fa-' + item.label}>{item.label}</a>
                })}
            </div> */}
        </Container>
    </header>

}

export default Header;