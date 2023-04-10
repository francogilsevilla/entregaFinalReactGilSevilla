import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkjs62V90ySfLJlldIGDYye4gV9qQRLTY",
    authDomain: "ecommercereact-df58f.firebaseapp.com",
    projectId: "ecommercereact-df58f",
    storageBucket: "ecommercereact-df58f.appspot.com",
    messagingSenderId: "166835833226",
    appId: "1:166835833226:web:d7990b56c80cc868d9a073",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
