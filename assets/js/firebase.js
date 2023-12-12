// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzMqnUERMQpAWmNLdfKk73RD-LcF4U-0k",
  authDomain: "omandits-2695b.firebaseapp.com",
  projectId: "omandits-2695b",
  storageBucket: "omandits-2695b.appspot.com",
  messagingSenderId: "546512999074",
  appId: "1:546512999074:web:56b145c952ce912c447dfb",
  measurementId: "G-LXNCB535LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the storage service
const storage = getStorage(app);

// Reference to the image in storage
const imageRef = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/omandits-2695b.appspot.com/o/1%20(1).png?alt=media&token=951af32f-d5df-4f6b-b255-61748a9adb3d'); // Replace 'path_to_your_image.jpg' with your image path in storage

// Get the download URL of the image
getDownloadURL(imageRef)
  .then((url) => {
    // Set the image URL as the source for the <img> element
    const img = document.getElementById('myImage');
    img.src = url;
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error getting download URL:', error);
  });

export const saveImageHelper = function () {
  const image = document.getElementById('image');
  const passport = document.getElementById('passport');

  // const selectedImage = image.files[0];
  // const selectedPassport = image.files[0];

  const storageRef = storage.ref();

  // Create a reference to the path where you want to store the image
  const imageRefe = storageRef.child('images/' + image.name); // 'images/' is the folder path, change it as needed

  // Upload file
  imageRefe.put(image).then((snapshot) => {
    console.log('Uploaded a file!', snapshot);
  }).catch((error) => {
    console.error('Error uploading file:', error);
  });
}

console.log("fine am in");