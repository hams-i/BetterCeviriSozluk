// Get Attributes
const this_add = document.getElementsByClassName("sagReklam")[0];
const this_add2 = document.getElementsByClassName("responsive728")[0];
const this_add3 = document.getElementsByClassName("bitis728")[0];
const container = document.getElementsByClassName("tumbu")[0];

// Get Images
const imgEtiketleri = document.querySelectorAll("img");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'for_add') {
        if(localStorage.getItem('bettercs_auto_status') == 'on'){
            if(localStorage.getItem('bettercs_add_status') == ""){
                localStorage.setItem('bettercs_add_status', "on");
                use_remove_add();
            }else if(localStorage.getItem('bettercs_add_status') == "on"){
                localStorage.setItem('bettercs_add_status', "");
                remove_remove_add();
            }
        }   
        else{
            if(localStorage.getItem('bettercs_add_status') == ""){
                localStorage.setItem('bettercs_add_status', "on");
                use_remove_add();
            }else if(localStorage.getItem('bettercs_add_status') == "on"){
                localStorage.setItem('bettercs_add_status', "");
                remove_remove_add();
            }
        }
    }
    if (message.action === 'for_darkmode') {
        if(localStorage.getItem('bettercs_auto_status') == 'on'){
            if(localStorage.getItem('bettercs_dark_status') == ""){
                localStorage.setItem('bettercs_dark_status', "on");
                use_dark_mode();
            }else if(localStorage.getItem('bettercs_dark_status') == "on"){
                localStorage.setItem('bettercs_dark_status', "");
                remove_dark_mode();
            }
        }
        else{
            if(localStorage.getItem('bettercs_dark_status') == ""){
                localStorage.setItem('bettercs_dark_status', "on");
                use_dark_mode();
            }else if(localStorage.getItem('bettercs_dark_status') == "on"){
                localStorage.setItem('bettercs_dark_status', "");
                remove_dark_mode();
            }
        }
    }
    if (message.action === "for_automtic") {
        if(localStorage.getItem('bettercs_auto_status') == 'on'){
            localStorage.setItem('bettercs_auto_status', "");
        }else if(localStorage.getItem('bettercs_auto_status') == ''){
            localStorage.setItem('bettercs_auto_status', "on");
        }
    }
    if (message.action === "for_reset") {
        localStorage.setItem('bettercs_add_status', "");
        localStorage.setItem('bettercs_dark_status', "");
        localStorage.setItem('bettercs_auto_status', "");
        remove_remove_add();
        remove_dark_mode();
    }
});
  

function use_remove_add(){
    this_add.style.display="none";
    this_add2.style.display="none";
    this_add3.style.display="none";
    
    container.style.display ="flex";
    container.style.justifyContent ="center";
}
function remove_remove_add(){
    this_add.style.display="block";
    this_add2.style.display="block";
    this_add3.style.display="block";
}

function use_dark_mode(){
    document.body.style.filter = "invert(100%)";
    document.body.style.backgroundColor = "#141414";
    imgEtiketleri.forEach(img => {
        img.style.filter = "invert(100%)";
    });
}
function remove_dark_mode(){
    document.body.style.filter = "invert(0%)";
    document.body.style.backgroundColor = "white";
    imgEtiketleri.forEach(img => {
        img.style.filter = "invert(0%)";
    });
}

if(localStorage.getItem('bettercs_auto_status') == 'on'){
    automatic_functions();
}else if(localStorage.getItem('bettercs_auto_status') == '' ||localStorage.getItem('bettercs_auto_status') == undefined ){
    localStorage.setItem('bettercs_add_status', "");
    localStorage.setItem('bettercs_dark_status', "");
    localStorage.setItem('bettercs_auto_status', "");
}

function automatic_functions(){
    if(localStorage.getItem('bettercs_add_status') == 'on'){
        use_remove_add();
    }
    if(localStorage.getItem('bettercs_dark_status') == 'on'){
        use_dark_mode();
    }
}

console.log(imgEtiketleri);