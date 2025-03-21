var elem = document.querySelector(".elemmove-text");
var fixed = document.querySelector(".fixed-elem");
    var elem2 = document.querySelectorAll(".elem-text");


    elem.addEventListener("mouseenter", () => {
        fixed.style.display = "block";
})
elem.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
})


elem2.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;

    })

});