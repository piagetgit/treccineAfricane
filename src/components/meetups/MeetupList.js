import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';
import {Row ,Col, Container} from 'react-bootstrap'

function MeetupList(props){
    console.log(props);
   return(
    <Container>
        <h1 className={classes.logo}>All Braids</h1>
         <Row>
             {props.meetups.map(meetup =>
                 <Col className="col-sm-3">
                        <MeetupItem key={meetup.id} 
                            id={meetup.id} 
                            image={meetup.urlImage}
                            title={meetup.title}
                            description={meetup.description}
                            holdingTime={meetup.holdingTime}     
                            baseColor={meetup.baseColor}    
                            date={meetup.date}        
                            makingTime={meetup.makingTime} 
                            price={meetup.price}  
                            
                         />  
                </Col>
            )}
        </Row>
    </Container> 
    );
}

export default MeetupList;