let list = document.querySelectorAll('.single_color')

if (window.localStorage.color) {
    document.body.style.backgroundColor = window.localStorage.color
    list.forEach((el) => {
        el.classList.remove("active")
    })
    document.querySelector(`[data-color="${window.localStorage.color}"]`).classList.add("active")
}

list.forEach((li) => {
    li.addEventListener("click", (e) => {
        list.forEach((el) => {
            el.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        document.body.style.backgroundColor = e.currentTarget.dataset.color
    })

})