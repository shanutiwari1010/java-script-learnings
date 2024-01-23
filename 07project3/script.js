const courses = [
    {
        name: "Complete ReactJS courses",
        price: "2.3"
    },
    {
        name: "Complete Angular courses",
        price: "2.1"
    },
    {
        name: "Complete MERN courses",
        price: "2.7"
    },
    {
        name: "Complete JAVA courses",
        price: "2.8"
    }
];

{/* <li class="list-group-item">Complete JAVA course <span class="float-right"></span></li>; */}


function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")

       const price = document.createTextNode("$" + course.price)
       span.appendChild(price)

       li.appendChild(span)
       ul.appendChild(li)
    });
}

// generateLIST();

window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn")

button.addEventListener("click", ()=>{
    courses.sort((a,b)=>a.price - b.price)
    generateLIST();
});

// button.addEventListener("click", ()=>{
//     courses.sort((a,b)=>b.price - a.price)
//     generateLIST();
// });