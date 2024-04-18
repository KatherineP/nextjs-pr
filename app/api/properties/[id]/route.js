// import {
//     getDocs,
//     collection,
//     addDoc,
//     getDoc,
//     querySnapshot,
//     query,
//     onSnapshot,
//     deleteDoc,
//     doc,
// } from 'firebase/firestore';
// import { db } from '@/app/firebase/config';
// import Property from '@/models/Property';
//
// //GET /api/properties
// export const GET = async (request) => {
//     try {
//         const q = query(collection(db, 'properties'));
//         const querySnapshot = await getDocs(q);
//
//         if (!querySnapshot.empty) {
//             const property = querySnapshot.docs.find(doc => doc.id === 'j0T7LAxXbdwebSZBoL2q');
//             if (property) {
//                 const propertyData = { id: property.id, ...property.data() };
//                 return Response.json(propertyData);
//             } else {
//                 return Response.json({ message: "Property not found" }, { status: 404 });
//             }
//         }
//     }   catch (e){
//         console.error('Error fetching data:', e);
//         return new Response('Failed', {status: 500})
//     }
// };