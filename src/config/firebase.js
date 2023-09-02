import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0gXQHjm43JQLYtnCaP6Muuz2zJ9drjHo",
  authDomain: "mateen-ahmed.firebaseapp.com",
  projectId: "mateen-ahmed",
  storageBucket: "gs://mateen-ahmed.appspot.com",
  messagingSenderId: "609642620132",
  appId: "1:609642620132:web:643f85bee664edea7ff8f1",
  measurementId: "G-708HQGD9D2",
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
// const storage = getStorage(app);
// export const storageRef = ref(storage);
