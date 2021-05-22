import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = (props) => {

    const { title, menu } = { ...props };

    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto">{title}</Navbar.Brand>
        <Nav className="inline" sticky="top">
            {menu.map((item, index) => {
                return <Nav.Link key={index} href={item.href}>{item.name}</Nav.Link>
            })}

        </Nav>
        {/*  <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form> */}
    </Navbar >

}

export default Navigation;