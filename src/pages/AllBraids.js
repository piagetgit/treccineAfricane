import { useState, useEffect } from "react";
import BraidList from "../components/braids/BraidList";
import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../components/firebase/fireBaseConfig';

async function getBraid(db) {
  const braids = collection(db, 'braids');
  const braidsSnapshot = await getDocs(braids);
  const braidList = braidsSnapshot.docs.map(doc => doc.data());
  return braidList;
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function AllBraidPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBraids, setLoadedBraids] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getBraid(db).then((response) => {
      return response;
    }).then((data) => {

      const braids = [];

      for (const key in data) {
        const b = {
          id: key,
          ...data[key]/* 
         id:key["id"],
         title:key["title"]*/
        };

        braids.push(b);
        //console.log(b);
      }

      setIsLoading(false);
      setLoadedBraids(braids);
    }).catch((error) => { console.log("error getting braids:" + error) });



  }, []);
  //execute quando il valore di isLoading change

  if (isLoading) {
    return <section>
      <p>Loading ......</p>
    </section>
  }

  return <div >
    <BraidList braids={loadedBraids} />
  </div>;
}

export default AllBraidPage;