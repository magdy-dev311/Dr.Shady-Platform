let menuBtn = document.getElementById("menu")
let mobileNav = document.getElementById("mobileNav")
let mainNavBar = document.getElementById("nav")
let scrollToTopBtn = document.getElementById("scrollToTop")

let formContainer = document.getElementById("form-container")
let formChild = document.getElementById("form-child")
let closeFormBtn = document.getElementById("closeFormBtn")

let bookingBtns = Array.from(document.querySelectorAll(".book-btn"))

let nameInput = document.getElementById("name-input")
let levelInput = document.getElementById("level-input")
let gradeSelect = document.getElementById("grade-select")
let numberInput = document.getElementById("number-input")

let userData = {}

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
    } else {
        mainNavBar.classList.remove("bg-white/10", "backdrop-blur-lg")
        mainNavBar.classList.add("bg-white")
        scrollToTopBtn.classList.remove("translate-x-0")
        scrollToTopBtn.classList.add("translate-x-[100px]")
    }
}

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

let allYears = [
    "1️⃣ الصف الأول ",
    "2️⃣ الصف الثاني ",
    "3️⃣ الصف الثالث ",
    "4️⃣ الصف الرابع ",
    "5️⃣ الصف الخامس ",
    "6️⃣ الصف السادس ",
]

bookingBtns.forEach((btn) => {
    btn.addEventListener("click", function (curBtn) {
        formContainer.classList.remove("hidden")
        formContainer.classList.add("flex")
        levelInput.value = this.dataset.level
        gradeSelect.innerHTML = ""
        if (this.dataset.level === "المرحلة الإبتدائية") {
            for (let i = 0; i < allYears.length; i++) {
                gradeSelect.innerHTML += `<option>${allYears[i]}</option>`
            }
        }else{
            for (let i = 0; i < 3 ; i++) {
                gradeSelect.innerHTML += `<option>${allYears[i]}</option>`
            }
        }
    })
})

closeFormBtn.addEventListener("click", () => {
    formContainer.classList.remove("flex")
    formContainer.classList.add("hidden")
})



formChild.addEventListener("submit", (e) => {

    e.preventDefault()

    if (
        !nameInput.value.trim() ||
        !numberInput.value.trim()
    ) {
        alert("من فضلك ادخل جميع الحقول")
        return
    }

    userData.name = nameInput.value.trim()
    userData.level = levelInput.value.trim()
    userData.grade = gradeSelect.value.replace(/^\S+\s*/, "");
    userData.phone = numberInput.value.trim()

    let msg = encodeURIComponent(
        `
        *حجز جديد*

        *اسم الطالب*: ${userData.name}

        *المرحلة الدراسية*: ${userData.level}

        *الصف الدراسي*: ${userData.grade}

        *رقم الموبايل*: ${userData.phone}

        `
    )

    window.open(`https://wa.me/201028709228?text=${msg}`)

    formChild.reset()
    formContainer.classList.remove("flex")
    formContainer.classList.add("hidden")
})