
var firebaseConfig = {
  apiKey: "AIzaSyBrIlF2qLo_4oG2if012zdP2JQ6bEBl_aw",
  authDomain: "kwitter-6b4d0.firebaseapp.com",
  databaseURL: "https://kwitter-6b4d0-default-rtdb.firebaseio.com",
  projectId: "kwitter-6b4d0",
  storageBucket: "kwitter-6b4d0.appspot.com",
  messagingSenderId: "1086510512160",
  appId: "1:1086510512160:web:24d85b2708525be539a445",
  measurementId: "G-Q87WBLD48Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
