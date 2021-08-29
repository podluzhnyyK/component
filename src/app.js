import './main.css'

const submit = document.querySelector('.button');
const textarea = document.querySelector('.textarea');
const dialogue = document.querySelector('.dialogue-chat');

function addMessage() {
    submit.onclick = function() {
        const textareaValue = textarea.value;        
        const message = `<div class="message"><img class="message__avatar" src="img/avatar.png"><p class="message__text">${textareaValue}</p></div>`;

        if (textareaValue.length > 0) {
            dialogue.insertAdjacentHTML("beforeend", message);            
        }       

        textarea.value = '';
    }
}

addMessage();