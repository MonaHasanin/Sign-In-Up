let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#Logout");

let username = localStorage.getItem("username");
if (username){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = username;
}
logoutBtn.Eventlistner('click', function(){
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html"
    }, 1500)
})