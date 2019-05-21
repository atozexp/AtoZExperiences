

// Nav effects

let navColor = document.querySelectorAll(".nav-link");
navColor.forEach((i) =>{
    i.addEventListener("hover", (event) => {
        event.target.style.color = "red";
        setTimeout(()=> {
            event.target.style.color = "";
        }, 500);
    }, false);
});