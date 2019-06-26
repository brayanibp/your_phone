let userBoxOpen = document.querySelector('#user_loged');
let userBoxClose = document.querySelector('#user_box_close');
let userBoxLogOut = document.querySelector('#user_log_out');

userBoxOpen.addEventListener('click',logInteractive);
userBoxClose.addEventListener('click',logInteractiveClose);
userBoxLogOut.addEventListener('click',logOut);

function logInteractive() {
    let userBox = document.querySelector('#user_box');
    userBox.classList.add('user-box-visible');
}

function logInteractiveClose() {
    let userBox = document.querySelector('#user_box');
    userBox.classList.remove('user-box-visible');
}

function comboCountriesLoad() {
    $.ajax({
        url: 'localhost:3000/API/countries',
        type: 'GET',
        dataType: 'JSON',
        success: (data)=>{
            console.log(data);
        }
    });
}

function comboStatesLoad() {
    $.ajax({
        url: 'localhost:3000/API/states',
        type: 'GET',
        dataType: 'JSON',
        success: (data)=>{
            console.log(data);
        }
    });
}