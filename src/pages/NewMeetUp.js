import { useHistory } from "react-router";
import NewMeetupFom from "../components/meetups/NewMeetupForm";

function NewMeetUpPage(){
    const history= useHistory();

    function addMeetupHandler(meetupData){
        //url from firebase/table.json
        fetch('https://react-project-7fe0a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
             method:'POST',
             body: JSON.stringify(meetupData),
             headers:{
                 'Content-Type':'application/json'
             }
            }
        ).then(()=>{
            //quand le formulaire finit
            history.replace('/');
        });

    }

    return <section>
            <h1> Add MeetUp  </h1>
            <NewMeetupFom onAddMeetup={addMeetupHandler} />
        </section>;
}

export default NewMeetUpPage;