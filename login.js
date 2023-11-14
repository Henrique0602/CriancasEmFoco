const firebaseConfig = {
    apiKey: "AIzaSyDFt9rbCz9G-QxetDWfSfEPjC4m3ZE4Z1c",
    authDomain: "criancasemfoco-a0b2f.firebaseapp.com",
    projectId: "criancasemfoco-a0b2f",
    storageBucket: "criancasemfoco-a0b2f.appspot.com",
    messagingSenderId: "683066524349",
    appId: "1:683066524349:web:79187ddef2f8cbdc28edd4",
  };

firebase.initializeApp(firebaseConfig);



function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(user=>{
        console.log('Usuário ', user)
        alert("Usuário criado. Login feito.")
    }).catch(error =>{
        alert("Não foi possível criar a conta!")
        console.log('Erro:', error);
    })
}

function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        alert('Login Efetuado com sucesso!')
    }).catch(error =>{
        alert("Não foi possível fazer o login!")
        console.log('Erro:', error);
    })
}


function deletaUsuario(){
    var currentUser;
    currentUser = firebase.auth().currentUser;
    if(currentUser){
        currentUser.delete().then(()=>{
            alert("Usuário")
        }).catch(error =>{
            console.log('Erro:', error);
        })
    }
}

function logout(){
    firebase.auth().signOut().then(()=>{
        alert("Usuário deslogado")
    })
}