

// Nav effects


const navlink = document.querySelectorAll("a");
navlink.forEach(navigation => {
    navigation.style.color = "#3f3d56";
});

let navColor = document.querySelectorAll(".nav-link");
navColor.forEach((i) =>{
    i.addEventListener("click", (event) => {
        event.target.style.color = "red";
        setTimeout(()=> {
            event.target.style.color = "";
        }, 500);
    }, false);
});