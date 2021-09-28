
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCao_4hyTdkH19Mn0iEGbPIrI7minigT6M",
  authDomain: "kwitter-webpage-4fd5d.firebaseapp.com",
  databaseURL: "https://kwitter-webpage-4fd5d-default-rtdb.firebaseio.com",
  projectId: "kwitter-webpage-4fd5d",
  storageBucket: "kwitter-webpage-4fd5d.appspot.com",
  messagingSenderId: "198435032591",
  appId: "1:198435032591:web:f8d364a7d4a84911fd5d7a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!" ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
       function addRoom(){
        room_name = document.getElementById("room_name").ariaValueMax;
      
        firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
        });
      
        localStorage.setItem("room_name", room_name);
      
        window.location = "kwitter_page.html";
      }
      
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      
             Room_names = childKey;
             console.log("Room Name -" + Room_names);
             row= "<div class='room_name' id=" + Room_names+" onclick ='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
             document.getElementById("output").innerHTML+= row;
         //Start code
      
            //End code
            });});}
      getData();
      function redirectToRoomName(name)
      {
        console.log(name);
        localStorage.setItem("room_name",name);
        window.location = "kwitter_page.html";
      }
      
      function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
      }
    }