// var nouveaux_articles = document.getElementsByClassName("nouveau_article");
// var ajoute = document.getElementsByClassName("phonetique-et-ajoute-numero");
// var ency = document.getElementsByClassName("encyclopedique");
// var marques = document.getElementsByClassName("marque");
// var modifi = document.getElementsByClassName("beaucoup-De-modification");
// var articles  = document.getElementsByTagName('article');

function clearElement(){
    var articles  = document.getElementsByTagName('article');
    for (var i = 0; i < articles.length; i ++) {
        articles[i].style.display ="none";
}
}

function displayElement(className) { 
    clearElement();
    console.log(className)
    var elementToDisplay = document.getElementsByClassName(className);
    console.log(elementToDisplay)
    for (var i = 0; i < elementToDisplay.length; i ++) {
            elementToDisplay[i].style.display ="block";
    }
}

// function ajoute2() {
//     for (var i = 0; i < ajoute.length; i ++) {
//         if(ajoute[i].style.display =="none") {
//             ajoute[i].style.display ="block";
//         } else {
//             ajoute[i].style.display ="none";
//         }
//     }
// }

// function ency2() {
//     for (var i = 0; i < ency.length; i ++) {
//         if(ency[i].style.display =="none") {
//             ency[i].style.display ="block";
//         } else {
//             ency[i].style.display ="none";
//         }
//     }
// }

// function marque2() {
//     for (var i = 0; i < marques.length; i ++) {
//         if(marques[i].style.display =="none") {
//             marques[i].style.display ="block";
//         } else {
//             marques[i].style.display ="none";
//         }
//     }
// }

// function modifi2() {
//     for (var i = 0; i < modifi.length; i ++) {
//         if(modifi[i].style.display =="none") {
//             modifi[i].style.display ="block";
//         } else {
//             modifi[i].style.display ="none";
//         }
//     }
// }
