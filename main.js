const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".navmenu")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active")
    navmenu.classList.toggle("is-active")
})