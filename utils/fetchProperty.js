import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/app/firebase/config";

const fetchProperty = async (id) => {
    const q = query(collection(db, 'properties'));
    const querySnapshot = await getDocs(q);
    const property = querySnapshot.docs.find(doc => doc.id === id);
    if (property) {
        return { id: property.id, ...property.data() };
    } else {
        return [];
    }
};

export default fetchProperty;