// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD1qjVZyPNlyCboRakUhTTa7ncSCcMsTH8",
    authDomain: "kwitter-project-56d6a.firebaseapp.com",
    projectId: "kwitter-project-56d6a",
    storageBucket: "kwitter-project-56d6a.appspot.com",
    messagingSenderId: "796354288623",
    appId: "1:796354288623:web:41d6fc2e21f9f1cdf1341a",
    measurementId: "G-LRTVKF68B2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";
   function addroom() {
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
     });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}