import { Link }  from 'react-router-dom';
import classes from './MainNavigation.module.css'
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';


function MainNavigation(){
    /*return <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li> <Link to='/'>All MeetUps</Link> </li>
                    <li> <Link to='/new-meetup'>Add new MeetUp</Link> </li>
                    <li> <Link to='/favorites'>My Favorites</Link> </li>
                </ul>
            </nav>
          </header>;*/

    return (
    <Navbar className={classes.navbar} collapseOnSelect expand="md">
        <Container>
            <Navbar.Brand href="/" className={classes.logo}>Treccine Africane Ferrara</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className={classes.meauto}>
                <Nav.Link href="/">All Braids</Nav.Link>
                <Nav.Link href="/new-meetup">Lastest Braids</Nav.Link>
                <Nav.Link href="/new-meetup">Polpulars Braids </Nav.Link>
                </Nav>

                <Nav className={classes.formSeach}>
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