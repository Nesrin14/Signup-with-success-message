const userEmailInput = document.querySelector('#userEmailInput');
const subscribeBtn = document.querySelector('#subscribe-btn');
const alertMessage = document.querySelector('#alertMessage');


function checksEmailInput() {
    localStorage.setItem('user email', userEmailInput.value);
    if (checksUserValidation() === true) {
        subscribeSuccess();
    } else {
        showAlertMessage();
    }
}
function validationRegex() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(userEmailInput.value);
}

function checksUserValidation() {
    return validationRegex();
}


function subscribeSuccess() {
    window.location.href = '../../SucessLogin/sucess.html';
}

function showAlertMessage() {
    alertMessage.classList.remove('d-none');
    userEmailInput.style.color = 'white';
    userEmailInput.style.backgroundColor = 'hsl(4, 100%, 67%)';
    userEmailInput.style.border = '1px solid red';
}

subscribeBtn.addEventListener('click', checksEmailInput);
