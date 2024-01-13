const dismissBtn = document.querySelector('#dismiss-btn');
const userEmail = document.querySelector('#email-span')

if(localStorage.getItem('user email') != null){
    userEmail.innerHTML =localStorage.getItem("user email");
}

function goBackToHomePage(){
 window.location.href='../../Home/home.html'
}
dismissBtn.addEventListener('click',goBackToHomePage)