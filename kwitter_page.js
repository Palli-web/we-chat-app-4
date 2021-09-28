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
  room_name = localStorage.getItem("room_name");


  window.addEventListener("keydown",my_keydown);
  function my_keydown(e)
  {
      keypressed = e.keyCode;
      console.log(keyPressed);
      if(keyPressed == '13')
      {
      send();
      console.log("enter");

      }
  }

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";

      function getData() { firebase.database().ref("/"+room_name).on('value',function (snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){childkey= childSnapshot.Key;childData=childSnapshot.val();
    if (childKey != "purpose"){
        firebase_message_id = childKey;
        message_data = childData;
    }
        
    })}
      


