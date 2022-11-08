import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB7-Qa6-YJ7H8aA0DqkE22ORSi5KdOEWk0",
  authDomain: "swift-delivery-9c27f.firebaseapp.com",
  projectId: "swift-delivery-9c27f",
  storageBucket: "swift-delivery-9c27f.appspot.com",
  messagingSenderId: "598774983747",
  appId: "1:598774983747:web:d03302f37ce1ae7ce2b8f6",
  measurementId: "G-DNJZBJD62B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;