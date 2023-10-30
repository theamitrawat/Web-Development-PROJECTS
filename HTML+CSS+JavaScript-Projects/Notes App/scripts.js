let createBtn = document.querySelector(".create-btn");
let notesContainer = document.querySelector(".notes-container");
let notes = document.querySelector('.input-div');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes')
}

showNotes()

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener("click", function () {
    let inputDiv = document.createElement("section");
    inputDiv.classList.add("input-div");
    let inputBox = document.createElement("p");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./images/delete.png";
    deleteIcon.classList.add("delete-icon");
    notesContainer.appendChild(inputDiv);
    inputDiv.appendChild(inputBox);
    inputDiv.appendChild(deleteIcon);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName = 'section') {
        notes = document.querySelectorAll('.input-div');
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
});
