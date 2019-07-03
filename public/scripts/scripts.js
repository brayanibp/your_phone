let userBoxOpen = document.querySelector('#user_loged');
let userBoxClose = document.querySelector('#user_box_close');
let userBoxLogOut = document.querySelector('#user_log_out');
let fixedNavbar = document.querySelector('#navbar');
let homeContent = document.querySelector('#homeContent');
let orderBy = document.querySelector('#orderBy');
let profile_button = document.querySelector('#profile_button');
let logOut_button = document.querySelector('#logOut_button');



if (fixedNavbar) {
    window.addEventListener('scroll', function(e) {
        //console.log(window.scrollY)
        let position = window.scrollY;
        if (position > 189) {
            fixedNavbar.classList.add('fixed-nav-background');
            orderBy.classList.add('fixed-orderBy');
        } else {
            fixedNavbar.classList.remove('fixed-nav-background');
            orderBy.classList.remove('fixed-orderBy');
        }
    });
    homeContent.addEventListener('load',loadPhoneCards());
}

if (userBoxOpen) {
    userBoxOpen.addEventListener('click',logInteractive);
    userBoxClose.addEventListener('click',logInteractiveClose);
}

if (profile_button) {
    profile_button.addEventListener('click',loadProfile());
}

function logInteractive() {
    let userBox = document.querySelector('#user_box');
    userBox.classList.add('user-box-visible');
}

function logInteractiveClose() {
    let userBox = document.querySelector('#user_box');
    userBox.classList.remove('user-box-visible');
}

function loadPhoneCards() {
    $.ajax({
        url: 'http://localhost:3000/API/phones',
        type: 'GET',
        dataType: 'JSON',
        success: (data)=>{
            const container = document.querySelector('#homeContent');
            let phoneCards = '';
            lastPhoneId = 0;
            for (let i in data) {
                phoneCard = `
                    <div id="${data[i].phone_id}" class="phone-card">
                        <div class="phone-general-image">
                            <img src="${data[i].phone_image}" alt="telf">
                        </div>
                        <div class="phone-general-inf">
                            <label>${data[i].phone_name}</label>
                            <label>Price: ${data[i].phone_price}</label>
                            <label>Available: ${data[i].inventory}</label>
                        </div>
                    </div>
                `;
                phoneCards += phoneCard;
            }
            container.innerHTML = phoneCards;
        }
    });
}

function loadProfile() {
    $.ajax({
        url: 'http://localhost:3000/userInf/Profile/',
        type: 'GET',
        dataType: 'JSON',
        success: (view)=> {
            const container = document.querySelector('#interactive_content');
            container.innerHTML = view.myView;
        }
    });
}

function comboCountriesLoad() {
    $.ajax({
        url: 'http://localhost:3000/API/countries/',
        type: 'GET',
        dataType: 'JSON',
        success: (data)=>{
            console.log(data);
        }
    });
}

function comboStatesLoad() {
    $.ajax({
        url: 'http://localhost:3000/API/states/',
        type: 'GET',
        dataType: 'JSON',
        success: (data)=>{
            console.log(data);
        }
    });
}