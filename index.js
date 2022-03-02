const firebaseConfig = {
    apiKey: "AIzaSyCHVbo4Rt5LH3Js7etb0Lqzhvwo-Dz1V7U",
    authDomain: "teste-2011a.firebaseapp.com",
    projectId: "teste-2011a",
    storageBucket: "teste-2011a.appspot.com",
    messagingSenderId: "132126350123",
    appId: "1:132126350123:web:bad71becde3cd9b31b436e",
    measurementId: "G-712NFPN2BH"
  };   
  firebase.initializeApp(firebaseConfig)
  let registrar = document.getElementById("registrar");
  let login = document.getElementById("login");
  let logado = document.getElementById("logado"); 
  let registrado = document.getElementById("registrado"); 
  let conta = document.getElementById("email");
  let segredo = document.getElementById("senha");
  let titulo = document.getElementById("titulo");
  let voltar = document.getElementById("voltar");
  let auth = firebase.auth();


        registrar.addEventListener('click',(email,senha)=>{
            var email =  document.getElementById("email").value
            var senha = document.getElementById("senha").value
            auth.createUserWithEmailAndPassword(email, senha).then(() => {
                console.log("Usuário registrado com sucesso")
                registrado.style.display = "inline-block";
                login.style.display = "none";
                registrar.style.display = "none";
                conta.style.display = "none";
                segredo.style.display = "none";
                titulo.style.display = "none";
                voltar.style.display = "inline-block";
            }).catch(e=>{
                    console.log(e)
            })
        })
login.addEventListener('click', (email, senha) => {
    var email =  document.getElementById("email").value
    var senha = document.getElementById("senha").value
    auth.signInWithEmailAndPassword(email, senha).then(() => {
        console.log("Usuário logado com sucesso")
        logado.style.display = "inline-block";
        login.style.display = "none";
        registrar.style.display = "none";
        conta.style.display = "none";
        segredo.style.display = "none";
        titulo.style.display = "none";
        voltar.style.display = "inline-block";
    }).catch(()=>{
            alert("EMAIL OU SENHA INCORRETA")
    })
        })

        voltar.addEventListener('click',()=>{
                registrado.style.display = "none";
                logado.style.display = "none"
                login.style.display = "initial";
                registrar.style.display = "initial";
                conta.style.display = "initial";
                segredo.style.display = "initial";
                titulo.style.display = "initial";
                voltar.style.display = "none";
        })


        
