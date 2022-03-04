import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCgh1sYQ36q7es-VGKPcDlgbV3m1w4cqGw',
  authDomain: 'ecommercestore-60d6b.firebaseapp.com',
  projectId: 'ecommercestore-60d6b',
  storageBucket: 'ecommercestore-60d6b.appspot.com',
  messagingSenderId: '370521754264',
  appId: '1:370521754264:web:2f6f484ec234c53e7f5eed',
  measurementId: 'G-WL42M8L7XS',
};

//user object - store in database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }  
  return userRef; //incase we need the userRef for something in the code - return for now
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
