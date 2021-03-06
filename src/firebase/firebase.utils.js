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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`)

        const snapShot = await userRef.get();

        if(!snapShot.exists) {
              const { displayName, email } = userAuth; 
              const createdAt = new Date();

              try {
                     await userRef.set({
                             displayName, 
                             email,
                             createdAt,
                             ...additionalData
                     }) 
              } catch(error) {
                      console.log('error creating user', error.message);
              }
        }
        return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
