import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config ={
    apiKey: "AIzaSyC-PLWfm5zfAJozS7551nX_KpGwiLNCPtg",
    authDomain: "crown-store-nj.firebaseapp.com",
    projectId: "crown-store-nj",
    storageBucket: "crown-store-nj.appspot.com",
    messagingSenderId: "1066129526887",
    appId: "1:1066129526887:web:4540ed89ead20f7b30c4c2",
    measurementId: "G-4FVRBFV56K"
}

export const createUserProfileDocument = async(userAuth, additionalData)=> {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
   
    const snapShot = await userRef.get();
    
    // console.log(snapShot);

  if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      }
      catch(err){
          console.log('error creating user', err.message);
      }
  }
  return userRef;
};

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);

    });
    return await batch.commit()
};


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });

  return transformedCollection.reduce((accumulator,collection ) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
  },{});
} ;

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;