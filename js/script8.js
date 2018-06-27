var A, B, C, D, E, F, K, R ,S ,W ,X ,Y;


A = [
    {
        pseudo:"Quiiwi",
        password:"azerty",
        mail:"quiiwiki@gmail.com",
        stat:"Membre",
        pouvoir:"ADMIN",
        sexe:"GOD"
    },
    {
        pseudo:"Draski",
        password:"1234",
        mail:"kiwikili@hotmail.fr",
        stat:"Membre",
        pouvoir:"Moins que rien",
        sexe:"masculin"
    }
];

function myFunction(){
    B = document.getElementById("pseudo").value;
    C = document.getElementById("password").value;
    D = document.getElementById("email").value;
    K = "Membre";
    Q = "Moins que rien";

    var R ;
	for (i=0; i<document.formulaire.sexe.length; i++) {
		if (document.formulaire.sexe[i].checked) {
			R = document.formulaire.sexe[i].id;
		}
    }

    var a = A.length;
    if (A.pseudo === B){
        alert("hfhgf");
    }

 /*    for(a=0; a<A.length; a++){
        if(B === A[a].pseudo){
            alert("ce pseudo a déjà été choisi");
        }else if(D === A[a].mail){
            alert("cet email a déjà été choisi");
        }else {}
    }  */
    


      A.push({"pseudo":B, "password":C, "mail":D, "stat":K, "pouvoir":Q, "sexe":R});  

    console.log(A);
    console.log("email : " + D);
    console.log("password : " + C);
    console.log("pseudo : " + B);
    console.log(R + " a été sélectionné");
}


function myFunctionReset(){
    document.getElementById("donnees").reset();
}


function myFunctionConnexion(){

    var I = document.getElementById("origine");
    I.innerHTML = "Déconnecté";
    var J = document.getElementById("god");
    J.innerHTML = "Moins que rien";
    document.getElementById("connexion").style.color = "red";


    var G = prompt(" Tappez votre pseudo");
    for(var L = 0; L < A.length; L++){
        if(A[L].pseudo === G){
            var H = prompt(" Tappez votre mot de passe");
            if(A[L].password === H){
                if(A[L].pouvoir === "ADMIN"){
                    var I = document.getElementById("origine");
                    I.innerHTML = "Connecté";
                    var J = document.getElementById("god");
                    J.innerHTML = "ADMIN / GOD";
                    document.getElementById("connexion").style.color = "blue"; 
                }else {
                    var I = document.getElementById("origine");
                    I.innerHTML = "Membre";
                    var J = document.getElementById("god");
                    J.innerHTML = "Moins que rien";
                    document.getElementById("connexion").style.color = "green"; 
                }
            }
        }
    }
}

