//import firebase from 'firebase/compat/app';
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

const listBraid=getBraid(db).then((response)=>{
  return response;
}).then((braid)=>{
  //console.log(braid);
  const braids = [];

  for (const id in braid) {
    const b = {
      id: id,
      ...braid[id]
    };
    braids.push(b);
  }

  
  console.log(braids);
});



/*getBraid(db).then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data);
});*/

//getBraid(db); 

async function getBraid(db) {
  const braids = collection(db, 'braids');
  const citySnapshot = await getDocs(braids);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

//export default firebase;