import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';
import {Row ,Col, Container} from 'react-bootstrap'

function MeetupList(props){
   return(
    <Container>
        <h1 className={classes.logo}>All Braids</h1>
         <Row>
             {props.meetups.map(meetup =>
                 <Col  md={4}>
                        <MeetupItem key={meetup.id} 
                            id={meetup.id} 
                            image={meetup.image}
                            title={meetup.title}
                            description={meetup.description}
                            address={meetup.address}             
                         />  
                </Col>
            )}
        </Row>
    </Container> 
    );
}

export default MeetupList;