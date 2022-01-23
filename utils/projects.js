import { firestore } from "./firebase";

const getProjects = async () => {
    const snapshot = await firestore.collection("Projects").get();
    snapshot.docs.forEach((doc) => console.log(doc.data()))
};

export  { getProjects };