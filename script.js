// recuperer toutes les balises de classe 'panel'

// pour chaque DIV de la collection d'objets de classe 'panel'
// ajouter un ecouteur d'evenement 'clic'
// la fonction de callback associée doit :
// enlever la classe active de toutes les DIV
// ajouter la classe active pour la DIV ayant déclenchée l'évenement 'clic'
//var myPanels= document.getElementsByClassName("panel");


var myPanels = document.querySelectorAll('.panel');

myPanels.forEach(e=>{
    e.classList.remove('active');
});
myPanels[0].addEventListener('click', evt => {
    myPanels[0].classList.add('active');
    myPanels[1].classList.remove('active');
    myPanels[2].classList.remove('active');
    myPanels[3].classList.remove('active');
    myPanels[4].classList.remove('active');


})
myPanels[1].addEventListener('click', evt => {
    myPanels[1].classList.add('active');
    myPanels[0].classList.remove('active');
    myPanels[2].classList.remove('active');
    myPanels[3].classList.remove('active');
    myPanels[4].classList.remove('active');

});
myPanels[2].addEventListener('click', evt => {
    myPanels[2].classList.add('active');
    myPanels[0].classList.remove('active');
    myPanels[1].classList.remove('active');
    myPanels[3].classList.remove('active');
    myPanels[4].classList.remove('active');
});
myPanels[3].addEventListener('click', evt => {
    myPanels[3].classList.add('active');
    myPanels[0].classList.remove('active');
    myPanels[1].classList.remove('active');
    myPanels[2].classList.remove('active');
    myPanels[4].classList.remove('active');

});
myPanels[4].addEventListener('click', evt => {
    myPanels[4].classList.add('active');
    myPanels[0].classList.remove('active');
    myPanels[1].classList.remove('active');
    myPanels[2].classList.remove('active');
    myPanels[3].classList.remove('active');

});
