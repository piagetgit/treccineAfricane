import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const config = {
  apiKey: "AIzaSyDNw_XL3GmVfvCVaBr0jR7Cp86aC0Uo8Ic",
  authDomain: "react-project-7fe0a.firebaseapp.com",
  databaseURL: "https://react-project-7fe0a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-project-7fe0a",
  storageBucket: "react-project-7fe0a.appspot.com",
  messagingSenderId: "706276440031",
  appId: "1:706276440031:web:158893058654e1e7d8b66a",
  measurementId: "G-BWL4XG75D0"
};

const app = initializeApp(config);
const db = getFirestore(app);

async function getBraid(db) {
  const braids = collection(db, 'braids');
  const citySnapshot = await getDocs(braids);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    //url from firebase/table.json
    /*fetch('https://react-project-7fe0a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'

    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setIsLoading(false);

      console.log(meetups);
      setLoadedMeetups(meetups);
    });*/

    getBraid(db).then((response)=>{
      return response;
    }).then((data)=>{
     
      const braids = [];
    
      for (const key in data) {
        const b = {
          id:key,
         ...data[key]/* 
         id:key["id"],
         title:key["title"]*/
        };

        braids.push(b);
        //console.log(b);
      }
      
      setIsLoading(false);

      
      setLoadedMeetups(braids);
    });


    
  }, []);
  //execute quando il valore di isLoading change

  if (isLoading) {
    return <section>
      <p>Loading ......</p>
    </section>
  }

  return <div >
    <MeetupList meetups={loadedMeetups} />
  </div>;
}

export default AllMeetUpPage;