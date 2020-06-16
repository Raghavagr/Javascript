//EXERSISE 2
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/


console.log('Editable div exercise');

let divElem = document.createElement('div');

let val = localStorage.getItem('text');
let text;

if (val == null) {
    text = document.createTextNode("Click on me To Edit it");
}
else {
    text = document.createTextNode(val);
}

divElem.appendChild(text);
//console.log(divElem);

divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'color:red;border:2px solid black;width:220px;height:117px;margin:14px;padding:10px;');

// accessing the heading to insert it below the heading
let container = document.querySelector('.container');
let front = document.getElementById('myFront');

// inserting divElem before the myFront ID
container.insertBefore(divElem, front);
//console.log(container,divElem,front);

divElem.addEventListener('click', function () {
    let notextArea = document.getElementsByClassName('textarea').length;
    if (notextArea == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }

    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
})

