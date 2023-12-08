const firebaseConfig = {
      apiKey: "AIzaSyAsLK3gDY4ZiJTrtEcJi0uOoIohZS3GCec",
      authDomain: "kwitter-room-5a30f.firebaseapp.com",
      databaseURL: "https://kwitter-room-5a30f-default-rtdb.firebaseio.com",
      projectId: "kwitter-room-5a30f",
      storageBucket: "kwitter-room-5a30f.appspot.com",
      messagingSenderId: "160071345517",
      appId: "1:160071345517:web:ccf568dc66d5c0d2dba664",
      measurementId: "G-J96SK90P29"
    };
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig)

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });


      document.getElementById("msg").value = "";
}
