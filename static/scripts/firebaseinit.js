const firebaseConfig = {
    apiKey: "AIzaSyBAk-mgwhJvbX3ZjkO1CK27on0B_q1czoE",
    authDomain: "image-uploader-b9c4f.firebaseapp.com",
    projectId: "image-uploader-b9c4f",
    storageBucket: "image-uploader-b9c4f.appspot.com",
    messagingSenderId: "506315918353",
    appId: "1:506315918353:web:4ff19619904c8b3270f5b0",
    measurementId: "G-YP0EKPKPDD"
};

// Initialize Firebase with a default Firebase project
firebase.initializeApp(firebaseConfig);

// Use the shorthand notation to access the default project's Firebase services
const firestore = firebase.firestore();
firestore.collection("ImageUploader").doc("Images").get().then(data => {
    console.log(data.data());
})
