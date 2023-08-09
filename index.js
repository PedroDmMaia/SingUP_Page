let email = document.getElementById('email-camp');
const principal = document.querySelector('.main-content');
const result = document.querySelector('.result');
const buttonDirect = document.querySelector('form');
const buttonClose = document.getElementById('close-button');
const spanMenssage = document.getElementById('spanMenssage');

buttonDirect.addEventListener('submit', (e) => {
    e.preventDefault();

    button(email.value);
    errorMessage(email.value);
});

email.addEventListener('keydown', () => {
    email.classList.remove('error');
    spanMenssage.style.display = 'none';
});

function validaEmail(email) {
    let valida = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valida.test(email);
}

function errorMessage(nomeEmail) {
    if (!validaEmail(nomeEmail)) {
        email.classList.add('error')
        spanMenssage.style.display = 'block';
    }
}

function button(userEmail) {
    if (validaEmail(userEmail)) {
        principal.classList.add('none');
        result.classList.remove('none');
    }
    buttonClose.addEventListener('click', () => {
        principal.classList.remove('none');
        result.classList.add('none');
    });
}

