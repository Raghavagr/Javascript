// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript


//SOLUTION -1

console.log("editable div exercise");
let links = document.links;
let str = 'python';
let href;
Array.from(links).forEach(function(element) {
      href = element.href;
      if(href.includes(str)) {
         console.log(href);
      }
})


// SOLUTION - 2

let links = document.links;
Array.from(links).forEach((element) => {
      if(element.href.includes("python")) {
         console.log(element)
       }
})


// SOLUTION - 3   --> with help of for-loop

let links = document.links;
for(let index =0; index<links.length; index++) {
    if(links[index].href.includes("python")) {
       document.write(links[index].href);
     }
}

