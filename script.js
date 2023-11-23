const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//show already present notes in the browser, on our webpache
function shownotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
shownotes()

//store in browser
function store(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}



//this is what will happen when you click on the create button
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);
})

//add delete button
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        store()
    }
    //code so that everytime we create a note we update our browser
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".inputBox")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                store();
            }})
    }
})

//when we press enter on our keyboard, it will add a line break instead of doin the default action of the enter key
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


