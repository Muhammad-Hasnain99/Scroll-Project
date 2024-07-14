
//Set Date
const date = document.getElementById(`date`)
date.innerHTML = new Date().getFullYear();


//Menu Content
const MenuBtn = document.querySelector(".menu-btn")
const LinkContainer = document.querySelector(".link-container")

MenuBtn.addEventListener("click",function(){
 if(LinkContainer.style.display != `none`){
    LinkContainer.style.display = `none`;
 }
 else{
    LinkContainer.style.display = `block`;
 }
})


//scroll navbar
const navbar = document.querySelector(".nav")
const TopLink = document.querySelector(".top-link")

window.addEventListener("scroll",function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
    if(scrollHeight > 500){
        TopLink.classList.add("show-link");
    }
    else{
        TopLink.classList.remove("show-link");
    }
})
