// selecting side navbar,menu icon
    var sidenav=document.getElementById("sidenav")
    var menuicon=document.getElementById("menuicon")
    var closenav=document.getElementById("closenav")

    menuicon.addEventListener("click",function(){
        sidenav.style.right=0
    })

    closenav.addEventListener("click",function(){
        sidenav.style.right= "-50%"
    })
    // product search funtionality
    var productcontainer = document.getElementById("productcontainer")

    var search = document.getElementById("search")
    
    var productlist=productcontainer.querySelectorAll("div")

   search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h1").textContent.toUpperCase();

        if (productname.indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
