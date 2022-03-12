const showRegisterBtn = document.getElementById('register-button')
const registerBox = document.getElementById('container-register')
const hideRegisterBtn = document.getElementById('hide-register')




showRegisterBtn.onclick = function() {
    registerBox.style.display = "block"
}

hideRegisterBtn.onclick = function() {
    registerBox.style.display = "none"
}


// showRegisterBtn.addEventListener('click', showRegisterBox())

// function showRegisterBox() {
//     registerBox.style.visibility = "visible"
// }

// hideRegisterBtn.addEventListener('click', hideRegisterBox())

// function hideRegisterBox() {
//     registerBox.style.display = "none"
// }