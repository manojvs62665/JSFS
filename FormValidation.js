const firebaseConfig = {
    apiKey: "AIzaSyC5ZBDw3VUrkWcUiJ3b4utiwOErRGryazM",
    authDomain: "cutest-4cce4.firebaseapp.com",
    databaseURL: "https://cutest-4cce4.firebaseio.com",
    projectId: "cutest-4cce4",
    storageBucket: "cutest-4cce4.appspot.com",
    messagingSenderId: "84996232784",
    appId: "1:84996232784:web:014d1d397928de750a6355"
  };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function signUp(){
  const username = document.getElementById("username").value;
  const useremail = document.getElementById("useremail").value;
  const userpassword = document.getElementById("userpassword").value;
  const useraddress = document.getElementById("useraddress").value;
  const promise = auth.createUserWithEmailAndPassword(useremail, userpassword);
  promise.catch(e => alert(e.message));
  // alert("signed up");

  db.collection("userlist").doc().set({
    name: username,
    email: useremail,
    password: userpassword,
    address: useraddress
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}
function login(){
  const useremail = document.getElementById("useremail");
  const userpassword = document.getElementById("userpassword");
  const promise = auth.signInWithEmailAndPassword(useremail.value, userpassword.value);
  promise.catch(e => alert(e.message));
  // alert("signed In");
}

function logout(){
  auth.signOut();
  alert("signed Out")
}

auth.onAuthStateChanged(function(user){
  if(user){
    const useremail = user.useremail;
    alert("Active user " + useremail)
  }
  else{
    alert("No active user")
  }
})
  // event.preventDefault()
  // Add a new document in collection "cities"
  // db.collection("userlist").doc().set({
  //   username: name,
  //   email: email,
  //   password: password,
  //   address: address
  // })
  // .then(function() {
  //   alert("Document successfully written!");
  // })
  // .catch(function(error) {
  //   console.error("Error writing document: ", error);
  // });