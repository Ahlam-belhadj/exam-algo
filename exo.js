// Réponse1 : la valeur de C sera 24
//Réponse2 : la valeur de C sera 12312
// Réponse3 :
// function price(prixttc){
// prixttc = parseInt(prompt('Entrez un nombre'));
// let result = prixttc + prixttc * 0.2;
// alert (prixttc + result)
// }
// price();
// Réponse4;
// function nameMoi(nom ,prenom){
//     nom = (prompt('Entrez votre nom '));
//     prenom = (prompt('Entrez votre prenom'));
//  alert('Bonjour ' + prenom + ' votre nom est ' + nom)
// }
// nameMoi()
// Réponse5;
// function nbr(altr,altr2){
//     altr =  parseInt(prompt('Entrez un nombre '));
//     altr2 = parseInt(prompt('Entrez un nombre '));
//     let result = altr2 * altr ;
//     if (result < 0){
//         alert('votre nombre est négatif')
//     }else if  (result > 0){
//         alert('votre nombre est positif')
//     }
// }
// nbr()
// Réponse6;
// function ut(age){
//  age =parseInt(prompt('saisir votre age '));

// if (age <13 ) {
//     alert('Regarder Action man');
// }else if (age >= 13 && age <=18) {
//     alert ('Regarder matrix');
// }
// else if (age > 18) {
//     alert('Regarder evil dead')
// }
// }
// ut()
//Réponse7;
// function nbr1(){
//     let random = Math.round(Math.random() *10);
//     let user;
//     do{
//         user = parseInt(prompt('Entrez un nbr en 0 et 10'));
//     if (user > random){
//         alert ('Votre nombre est trop grand');
//     }else if (user < random){
//         alert ('Votre nombre est trop petit');
//     }
//     else if ( user=== random) {
//         alert ('Vous avez le bon nombre');
//     }
//     }while (user != random) 
// }
// nbr1()
//Réponse8;
// function nbr2(nbr){
//     nbr = parseInt(prompt('Entrez un nombre'));
//     for(nbr;nbr >= 0;nbr-- ){
//     console.log(nbr);
//     }
// }
// nbr2()
// Réponse9: 
// function jeu (nbr3){
//     let random = Math.round(Math.random() *20);
//     let alm;
//     do{
//         alm= parseInt(prompt('Entrez un nbr '));
//         if (alm > random){
//                alert ('Votre nombre est trop grand');
//        }else if (alm < random){
//               alert ('Votre nombre est trop petit');
//         } else if ( alm === random) {
//              alert ('Vous avez le bon nombre');
//             }
//     }while (alm != random) 
// }
// jeu ()
//Réponse10:
// function sum(){
//      let array = [10, 15, 20, 15, 14, 8]
//      let somme = 0;
//       for (let i = 0; i < array.length; i++) {
//         somme = somme + array[i];
//     } console.log(somme);
// }
// sum();
// Réponse11;
// function nbr(){
//     let eleve = parseInt(prompt('Combien y a t-il d\'élèves'));
//     let array = [];
//     for (let i = 1; i < eleve; i++) {
//         let notes = parseInt(prompt('Note de chaque élève'));
//         array.push(notes);
//     }
//     console.log(array);
// }
// note();
// Réponse12;
// function nbr() {
//     let eleve = parseInt(prompt('Combien y a t-il d\'élèves'));
//     let array = [];
//     for (let i = 0; i < eleve; i++) {
//         let notes = parseInt(prompt('Note de chaque élève'));
//         array.push(notes);
//         let moyenne = array.filter(notes => notes >= 10)
//         console.log('Le nombre d\'élèves au dessus de la moyenne est de ' + moyenne.length);
//     }
// }
// note();
// Réponse13;
// function grdvaleur() {
//     let nbre = [[0, 18], [1, 45], [45, 48], [-3, 2]]
//     let high = 0;
//     for (let i = 1; i < 4; i++) {
//         for (let j = 1; j < 2; j++){
//             if (nbre[i][j] > high) {
//                 high = nbre[i][j];
//             }
//         }
//     }
//     console.log(high);
// }
// grdvaleur();
// Réponse14;
// function compter() {
//     let mot = prompt('Entrez un mot')
//     console.log(mot.length);
// }
// compter();