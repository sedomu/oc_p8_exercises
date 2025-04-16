let btn = document.querySelector('#myButton');
let paragraph = document.querySelector('.greetings');
btn.addEventListener('click', () => {
    paragraph.innerText = "Bonjour, vous avez cliqué sur le bouton !";
})