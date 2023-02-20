document.addEventListener('DOMContentLoaded', () => {
    // Get Button's
    let add_button = document.querySelector(".add-button-container");
    let dark_button = document.querySelector(".dark-button-container");
    let automatic_button = document.querySelector(".automatic-button-container");
    let reset_button = document.querySelector(".reset-button");

    add_button.addEventListener("click", () =>{
        chrome.tabs.query({ url: "https://cevirsozluk.com/*" }, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, { action: "for_add" });
            });
        });
        if(localStorage.getItem('bettercs_auto_status') == 'on'){
            add_button.classList.remove('on');
            if(localStorage.getItem('bettercs_add_status') == ""){
                localStorage.setItem('bettercs_add_status', "on");
                add_button.classList.add('on');
            }else if(localStorage.getItem('bettercs_add_status') == "on"){
                localStorage.setItem('bettercs_add_status', "");
                add_button.classList.remove('on');
            }
        }else if(localStorage.getItem('bettercs_auto_status') == ''){
            if(localStorage.getItem('bettercs_add_status') == ""){
                add_button.classList.add('on');
                localStorage.setItem('bettercs_add_status', "on");
            }else if(localStorage.getItem('bettercs_add_status') == "on"){
                add_button.classList.remove('on');
                localStorage.setItem('bettercs_add_status', "");
            }
        }
    });
    dark_button.addEventListener("click", () =>{
        chrome.tabs.query({ url: "https://cevirsozluk.com/*" }, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, { action: "for_darkmode" });
            });
        });
        if(localStorage.getItem('bettercs_auto_status') == 'on'){
            dark_button.classList.remove('on');
            if(localStorage.getItem('bettercs_dark_status') == ""){
                localStorage.setItem('bettercs_dark_status', "on");
                dark_button.classList.add('on');
            }else if(localStorage.getItem('bettercs_dark_status') == "on"){
                localStorage.setItem('bettercs_dark_status', "");
                dark_button.classList.remove('on');
            }
        }else if(localStorage.getItem('bettercs_auto_status') == ''){
            if(localStorage.getItem('bettercs_dark_status') == ""){
                localStorage.setItem('bettercs_dark_status', "on");
                dark_button.classList.add('on');
            }else if(localStorage.getItem('bettercs_dark_status') == "on"){
                dark_button.classList.remove('on');
                localStorage.setItem('bettercs_dark_status', "");
            }
        }
    });
    automatic_button.addEventListener("click", () =>{
        chrome.tabs.query({ url: "https://cevirsozluk.com/*" }, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, { action: "for_automtic" });
            });
        });
        if(localStorage.getItem('bettercs_auto_status') == 'on'){
            automatic_button.classList.remove('on');
            localStorage.setItem('bettercs_auto_status', "");
        }else if(localStorage.getItem('bettercs_auto_status') == ''){
            automatic_button.classList.add('on');
            localStorage.setItem('bettercs_auto_status', "on");
        }
    });
    reset_button.addEventListener("click", () => {
        chrome.tabs.query({ url: "https://cevirsozluk.com/*" }, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, { action: "for_reset" });
            });
        });
        localStorage.setItem('bettercs_add_status', "");
        localStorage.setItem('bettercs_dark_status', "");
        localStorage.setItem('bettercs_auto_status', "");
        add_button.classList.remove('on');
        dark_button.classList.remove('on');
        automatic_button.classList.remove('on');
    });
    if(localStorage.getItem('bettercs_auto_status') == 'on'){
        automatic_functions();
    }else if(localStorage.getItem('bettercs_auto_status') == '' || localStorage.getItem('bettercs_auto_status') == undefined ){
        localStorage.setItem('bettercs_add_status', "");
        localStorage.setItem('bettercs_dark_status', "");
        localStorage.setItem('bettercs_auto_status', "");
    }

    function automatic_functions(){
        if(localStorage.getItem('bettercs_add_status') == 'on'){
            add_button.classList.add('on');
        }
        if(localStorage.getItem('bettercs_dark_status') == 'on'){
            dark_button.classList.add('on');
        }
        if(localStorage.getItem('bettercs_auto_status') == 'on'){
            automatic_button.classList.add('on');
        }
    }

});
