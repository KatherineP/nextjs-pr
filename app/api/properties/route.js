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
//             const properties = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return new Property({id: doc.id, ...data});
//             });
//             return Response.json(properties);
//         }
//     }   catch (e){
//         console.error('Error fetching data:', e);
//         return new Response('Failed', {status: 500})
//     }
// };