

// Nav effects


const navlink = document.querySelectorAll("a");
navlink.forEach(navigation => {
    navigation.style.color = "#3f3d56";

});

let navColor = document.querySelectorAll(".nav-link");
navColor.forEach((i) =>{
    i.addEventListener("mouseover", (event) => {
        event.target.style.color = "#f2f2f2";
        setTimeout(()=> {
            event.target.style.color = "";
        }, 1500);
    }, false);
});

// H2 effects

let mainHead = document.querySelectorAll("h2");
mainHead.forEach((i) =>{
    i.addEventListener("mouseover", (event) => {
        event.target.style.color = "#ff6584";
        setTimeout(()=> {
            event.target.style.color = "";
        }, 500);
    }, false);
});
