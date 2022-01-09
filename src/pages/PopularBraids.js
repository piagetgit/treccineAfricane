import { useState, useEffect } from "react";
import BraidList from "../components/braids/BraidList";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../components/firebase/fireBaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getBraid(db) {
    const braids = collection(db, 'braids');
    const braidsSnapshot = await getDocs(braids);
    const braidList = braidsSnapshot.docs.map(doc => doc.data());
    return braidList;
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
                if (b.popular)
                    braids.push(b);

            }

            setIsLoading(false);
            setLoadedBraids(braids);
        });



    }, []);

    if (isLoading) {
        return <section>
            <p>Loading ......</p>
        </section>
    }

    return <div >
        <BraidList nameOfPage="Polular Braids" braids={loadedBraids} />
    </div>;
}

export default LatestBraid;