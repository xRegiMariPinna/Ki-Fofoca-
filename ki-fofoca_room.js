const firebaseConfig = {
  apiKey: "AIzaSyCCoBRE8Jm2DHlVQC7tWYfX41HC5IkMhT8",
  authDomain: "kwetter-9ee9d.firebaseapp.com",
  databaseURL: "https://kwetter-9ee9d-default-rtdb.firebaseio.com/",
  projectId: "kwetter-9ee9d",
  storageBucket: "kwetter-9ee9d.appspot.com",
  messagingSenderId: "403376226378",
  appId: "1:403376226378:web:642b5a852854d25c47e6b3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML =  "Bem-vindo(a) " + user_name + "!";

function addRoom() {

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionar sala"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "Ki-Fofoca_page.html";
}

function getData() { 
 
  // trecho importado do Firebase
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       // para mostrar no console o valor do Room_names 
       console.log("Room Name - " + Room_names);
       
       // cria uma variável chamada row, e dentro dela temos
       // uma div com classe room_name, pois fornecemos propriedades CSS
       // id, porque é importante uma identificação
       //+Room_names+ => terá o nome da sala vindo do firebase
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      // vinculamos a função ao evento de clique
      // criamos a função redirectToRoomName
      // this.id -significa, sempre que a função redirectToRoomName for chamada,passará o valor da id atual do elemento dentro da função redirectToRoomName. E,a id apropriada é antes ajustada para id="+roomNames+".
      
      document.getElementById("output").innerHTML += row;
      
    });
  });

}

// Para obter os dados do banco de dados e exibi-los na página de salas do Kwitter
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Ki-Fofoca_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
