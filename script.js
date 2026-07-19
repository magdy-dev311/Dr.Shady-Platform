let menuBtn = document.getElementById("menu")
let mobileNav = document.getElementById("mobileNav")

menuBtn.addEventListener("click", ()=>{
    if (mobileNav.classList.contains("hidden")) {
        mobileNav.classList.remove("hidden")
        mobileNav.classList.add("flex")
        menuBtn.innerHTML = `<i class="fa-solid fa-x text-red-400"></i>`
    } else {
        mobileNav.classList.remove("flex")
        mobileNav.classList.add("hidden")
        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
})

let links = Array.from(document.querySelectorAll("#mobileNav li a"))
links.forEach( e => {
    e.addEventListener("click", ()=>{
        mobileNav.classList.remove("flex")
        mobileNav.classList.add("hidden")
        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})