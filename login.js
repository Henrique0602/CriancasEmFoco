const firebaseConfig = {
    apiKey: "AIzaSyCvLFSxFFMm3M0vquNJ0KxMNKcYArQgaGI",
    authDomain: "projeto2mibteste-3ba55.firebaseapp.com",
    projectId: "projeto2mibteste-3ba55",
    storageBucket: "projeto2mibteste-3ba55.appspot.com",
    messagingSenderId: "824573277",
    appId: "1:824573277:web:63e3c4c655b7ffe758bcb4"
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});