let list = document.querySelectorAll('.single_color')

// if (window.localStorage.color) {
//     document.body.style.color = window.localStorage.color
// }


list.forEach((li) => {
    li.addEventListener("click", function () {
        list.forEach((e) => {
            e.classList.remove("active")
        })
        li.classList.add("active")
        window.localStorage.setItem("color", li.getAttribute("data-color"))
    })

})