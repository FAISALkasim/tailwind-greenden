var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){

    sidenav.style.right=0
})

closenav.addEventListener("click",function(){

    sidenav.style.right="-50%"
})



var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")

// select ONLY product boxes
var productlist = productContainer.querySelectorAll(".grid > div")

search.addEventListener("keyup", function (event) {

    var enteredValue = event.target.value.toLowerCase()

    for (var count = 0; count < productlist.length; count++) {

        var productname = productlist[count].querySelector("h1").textContent.toLowerCase()

        if (productname.indexOf(enteredValue) === -1) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})