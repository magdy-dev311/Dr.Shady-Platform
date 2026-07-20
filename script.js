let menuBtn = document.getElementById("menu")
let mobileNav = document.getElementById("mobileNav")
let mainNavBar = document.getElementById("nav")
let scrollToTopBtn = document.getElementById("scrollToTop")

menuBtn.addEventListener("click", () => {
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
links.forEach(e => {
    e.addEventListener("click", () => {
        mobileNav.classList.remove("flex")
        mobileNav.classList.add("hidden")
        menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    })
})

window.onscroll = () => {
    if (scrollY > 70) {
        mainNavBar.classList.remove("bg-white")
        mainNavBar.classList.add("bg-white/10", "backdrop-blur-lg")
        scrollToTopBtn.classList.remove("translate-x-[100px]")
        scrollToTopBtn.classList.add("translate-x-0")
    }else {
        mainNavBar.classList.remove("bg-white/10", "backdrop-blur-lg")
        mainNavBar.classList.add("bg-white")
        scrollToTopBtn.classList.remove("translate-x-0")
        scrollToTopBtn.classList.add("translate-x-[100px]")
    }
}

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo(0,0)
})