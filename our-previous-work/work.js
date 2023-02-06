document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

// CMS

/////////////////// One Small Heading

let PROJECT_ID = "c0i9dxkx";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "welcome-message"]');

let URL = `https://c0i9dxkx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22welcome-message%22%5D`;

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
            let welcomeMessage = document.querySelector(".welcome-right p")
            result.forEach((result, index) => {
              welcomeMessage.textContent = result.text
            });
            
        })
////////////////////////////
