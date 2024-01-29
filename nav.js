//recupere la div id avec un id menu
let menu = document.getElementById('menu')

//on ajoute un evenement lors du click
menu.addEventListener('click', () => {

    //On met les trois barres ( toggle= pour activer ou desactiver)
    menu.classList.toggle('open')
})