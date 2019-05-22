

// Nav effects

let navColor = document.querySelectorAll(".nav-link");
navColor.forEach((i) =>{
    i.addEventListener("click", (event) => {
        event.target.style.color = "red";
        setTimeout(()=> {
            event.target.style.color = "";
        }, 500);
    }, false);
});