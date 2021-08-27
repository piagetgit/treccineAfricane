import { useState ,useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetUpPage(){
    const [isLoading,setIsLoading]= useState(true);
    const [loadedMeetups,setLoadedMeetups]= useState([]);

    useEffect(() =>{
          setIsLoading(true);
         //url from firebase/table.json
          fetch('https://react-project-7fe0a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
              
          ).then((response)=>{
              return response.json();
          }).then((data) => {
              const meetups=[];

              for(const key in data){
                const meetup ={
                  id:  key,
                  ...data[key]
                };
                meetups.push(meetup);
              }
              
              setIsLoading(false);
             

              setLoadedMeetups(meetups);
          });
    },[]);
    //execute quando il valore di isLoading change

    if(isLoading){
      return <section>
        <p>Loading ......</p>
      </section>
    }
  
    return <div >
            <MeetupList meetups ={loadedMeetups}/>
    </div>;
}

export default AllMeetUpPage;