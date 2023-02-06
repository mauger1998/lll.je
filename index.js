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
let QUERY = encodeURIComponent('*[_type == "smaller-grid"]');

let URL = `https://c0i9dxkx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'smaller-grid'%5D%0A%20`;

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          let gridItemHeading = document.querySelectorAll(".img-wrapper > p")

            result.forEach((result, index) => {
              gridItemHeading[index].textContent = result.productName
            });
            
        })
////////////////////////////


///////////////////////////// Two Small Image
        let QUERYTWO = encodeURIComponent(`*[_type == 'smaller-grid']{
            productImage,
            "imageUrl": productImage.asset->url
          }`);

let URLTWO = `https://c0i9dxkx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'smaller-grid'%5D%7B%0A%20%20productImage%2C%0A%20%20%22imageUrl%22%3A%20productImage.asset-%3Eurl%0A%7D`;

fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
          let gridItemImage = document.querySelectorAll(".img-wrapper img")

            result.forEach((result, index) => {
              gridItemImage[index].src = result.imageUrl
            });
            
        })



///////////////////////////// 
///////////////////////////// Three Big Heading



        let QUERYThree = encodeURIComponent(`*[_type == 'bigger-grid'] {
            productImage,
              "imageUrl": productImage.asset->url
          }`);



let URLThree = `https://c0i9dxkx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'bigger-grid'%5D%20%7B%0A%20%20productImage%2C%0A%20%20%20%20%22imageUrl%22%3A%20productImage.asset-%3Eurl%0A%7D`;
fetch(URLThree)
        .then((res) => res.json())
        .then(({ result }) => {
          let gridImage = document.querySelectorAll(".grid-item > img")

            result.forEach((result, index) => {
              gridImage[index].src = result.imageUrl
            });
            
        })

////////////////////

//////////////////// Big Heading
        let QUERYFOUR= encodeURIComponent(`*[_type == 'bigger-grid'] `);

let URLFOUR = `https://c0i9dxkx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'bigger-grid'%5D%20`;

fetch(URLFOUR)
    .then((res) => res.json())
    .then(({ result }) => {
      let gridHeading = document.querySelectorAll(".grid-item > p")

        result.forEach((result, index) => {
          gridHeading[index].textContent = result.productName
        });
        
    })
