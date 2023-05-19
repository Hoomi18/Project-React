import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKV0Kki4mHcy3OXfkbls2c_c0se0cSGfw",
  authDomain: "project-react-98474.firebaseapp.com",
  projectId: "project-react-98474",
  storageBucket: "project-react-98474.appspot.com",
  messagingSenderId: "164269869705",
  appId: "1:164269869705:web:37c965d1b4727fe32b9458",
  measurementId: "G-LJJNV0LNBP"
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;