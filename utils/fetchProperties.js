import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/app/firebase/config";

const fetchProperties = async () => {
    const q = query(collection(db, 'properties'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export default fetchProperties;