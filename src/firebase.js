import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZIRAytVL13SIBUcO_0j1Ne9FyzJZzHN0",
    authDomain: "disney-clone-react-f1163.firebaseapp.com",
    projectId: "disney-clone-react-f1163",
    storageBucket: "disney-clone-react-f1163.appspot.com",
    messagingSenderId: "130708378459",
    appId: "1:130708378459:web:2fb1d88c615d7ffc48407e"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();


// export { auth, provider, storage };
export { auth, provider };
export default db;