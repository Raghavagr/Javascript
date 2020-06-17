console.log("welcome to magic notes");

// add EventListener to add Note btn
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    //console.log('you have add a note');
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    myObj = {
        title: addTitle.value,
        text: addTxt.value
    }

    // add the addTxt value into notesObj
    //notesObj.push(addTxt.value);
    notesObj.push(myObj);

    // update the localstorage to add a new note
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // as note is added empty the textarea automatically
    addTxt.value = "";
    addTitle.value = "";

    showNotes();  // as we add the note show the note in our page itself withour reloading
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = '';
    notesObj.forEach(function (element, index) {
        html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
           <h5 class="card-title">${element.title}</h5>
           <p class="card-text">${element.text}</p>
           <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    })

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show, Please use Add Note section to add some note`;
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);  // we are using splice method to delete the note
    // here we want to delete the 1st index only so we have given index and 1 for 1st

    // Now, after deleting we have to upgrade the localstorage
    localStorage.setItem("notes", JSON.stringify(notesObj));

    // call the shownote func agai to see the upgradation
    showNotes();
}


// ADD functionality of search any Note
// If we type any input in search button so it should filter our search and show the note
// it is useful when there is many notes and we want some particular

let search = document.getElementById("searchTxt");
search.addEventListener('input', function (e) {
    e.preventDefault();

    let inputVal = search.value.toLowerCase();
    console.log("input value fired!", inputVal);
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function (element) {
        let cardTxt = document.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
})