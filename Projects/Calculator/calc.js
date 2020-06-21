console.log("my calculator");

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

let screenValue = '';
for(item of buttons) {
    item.addEventListener('click',function(e) {
        buttonText = e.target.innerText;  // access the innerText of button
        console.log("you have clicked",buttonText);  // whatever button we have clicked it will display that

        if(buttonText == 'X') {
            buttonText = '*';          // whenever we used multiply sign should be *
            screenValue += buttonText;   // add the proper sign to screen input
            screen.value = screenValue;  // set at the screen means at input field
        }

        else if(buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '=') {
            screen.value = eval(screenValue)  // if we click on = then it should evaluate the answer
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
