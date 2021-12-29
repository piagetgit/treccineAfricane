import { useState, useEffect } from "react";
import BraidList from "../components/braids/BraidList";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../components/firebase/fireBaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getBraid(db) {
  const braids = collection(db, 'braids');
  const citySnapshot = await getDocs(braids);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function LatestBraid() {
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
          ...data[key]
        };

        braids.push(b);

      }

      setIsLoading(false);

      const sortedBraids = braids.sort((braid1, braid2) => {
        return new Date(braid1.createdAt).getTime() - new Date(braid2.createdAt).getTime()
      }).reverse();

      console.log(sortedBraids);
      setLoadedBraids(sortedBraids);
    });



  }, []);

  if (isLoading) {
    return <section>
      <p>Loading ......</p>
    </section>
  }

  return <div >
    <BraidList braids={loadedBraids} />
  </div>;
}

export default LatestBraid;