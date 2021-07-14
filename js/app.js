const buttonMenu = document.querySelector('#button-menu');
const overlay = document.querySelector('#overlay');
const listMenu = document.querySelector('#list');

const links = document.querySelectorAll(".list .list__link");



function showMenu(){
  overlay.classList.toggle('showOverlay')
  listMenu.classList.toggle('showMenu')

}

function closeMenu(){
  listMenu.classList.toggle('showMenu')
  overlay.classList.toggle('showOverlay')
}


function changeFocus(){
  links.forEach(link=>link.classList.remove('isActive'));
  this.classList.add('isActive')
}

overlay.addEventListener('click',closeMenu);
buttonMenu.addEventListener('click',showMenu);

links.forEach(link=>link.addEventListener('click',changeFocus))