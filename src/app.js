const hamurgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
function toggleButton(){
    navList.classList.toggle('show')
    } 
 hamurgerButton.addEventListener('click',toggleButton)