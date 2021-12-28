
import classes from './MainNavigation.module.css'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

function MainNavigation() {
    return (
        <Navbar className={classes.navbar} collapseOnSelect expand="md">
            <Container >
                <Navbar.Brand href="/" className={classes.logo}>Treccine Africane Ferrara</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className={classes.content}>

                        <Nav.Link href="/">All Braids</Nav.Link>
                        <Nav.Link href="/latest-braids">Lastest Braids</Nav.Link>
                        <Nav.Link href="#">Polpulars Braids </Nav.Link>

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button className={classes.search} >Search</Button>
                        </Form>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default MainNavigation;