
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";
import classes from './Footer.module.css';

function Footer(props){
    return (
        <div className={classes.container}>
           <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="6">
                    <h5 className={classes.title}>For All information, Contact us</h5>
                    <p>
                        Follow us on all the socials media.
                    </p>
                </MDBCol>
                <MDBCol md="6" className={classes.links}>

                <ul>
                        <li className="list-unstyled">
                            <a href="#!">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 3</a>
                        </li>
                 

                   <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
                   
                    </ul>
                   
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright All Rights Reserved: <a href="#">Treccine Africane </a>
                </MDBContainer>
            </div>
        </MDBFooter>
        </div>
    );

} 
export default Footer;

/* <ul>
                        <li className="list-unstyled">
                            <a href="#!">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 3</a>
                        </li>
                 

                   <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
                   
                    </ul>*/