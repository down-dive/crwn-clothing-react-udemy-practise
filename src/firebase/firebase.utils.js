import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCNZIvG7sNDqjpW7ai6b6J8xmtxOyRbF_I",
        authDomain: "crown-db-b31b5.firebaseapp.com",
        projectId: "crown-db-b31b5",
        storageBucket: "crown-db-b31b5.appspot.com",
        messagingSenderId: "726651650041",
        appId: "1:726651650041:web:d79a6a9407b25a7a518728",
        measurementId: "G-C85W7PXTK5"
}

firebase.initializeApp(config);