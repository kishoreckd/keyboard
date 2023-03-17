// targetting the html
const buttons = document.querySelectorAll("button");
const text = document.querySelector("#textarea")
const caps = document.querySelector("#caps");

const btn = document.querySelectorAll(".btn")
// console.log(text);

// looping the buttons

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {

        if (e.target.id === "caps") {

            caps.classList.toggle("red")
            for (let k = 0; k < buttons.length; k++) {
                if (caps.classList.contains("red")) {
                    if (buttons[k].innerText != "caps".toUpperCase && buttons[k].innerText != "backspace" && buttons[k].innerText != "tab" && buttons[k].innerText != "enter"
                        && buttons[k].innerText != "shift" && buttons[k].innerText != "space" && buttons[k].innerText != ".com") {
                        buttons[k].innerText = buttons[k].innerText.toUpperCase()
                    }
                } else {
                    if (buttons[k].innerText != "caps" && buttons[k].innerText != "backspace" && buttons[k].innerText != "tab" && buttons[k].innerText != "enter"
                        && buttons[k].innerText != "shift" && buttons[k].innerText != "space" && buttons[k].innerText != ".com") {
                        buttons[k].innerText = buttons[k].innerText.toLowerCase()
                    }
                }
            }

        }
        else if (e.target.innerText !== "backspace" && e.target.innerText !== "tab" && e.target.innerText !== "caps" &&
            e.target.innerText !== "enter" && e.target.innerText !== "shift" && e.target.innerText !== ".com"
            && e.target.innerText !== "space" && e.target.innerText !== "@") {
            let values = e.target.innerText;
            text.value += values;

            // console.log(values);

        }


        else if (e.target.innerText == "space") {
            text.value += " ";
        }
        else if (e.target.innerText == "backspace") {
            text.value = text.value.slice(0, text.value.length - 1);
        }

        else if (e.target.innerText === "tab") {
            text.value += "    ";
        }
        else if (e.target.innerText === "enter") {
            text.value += "\n";
        }




    })
}

for (let i = 0; i < btn.length; i++) {
    // console.log(btn[i]);
    btn[i].setAttribute('keyname', btn[i].innerText);
    btn[i].setAttribute('lowerCaseName', btn[i].innerText.toLowerCase());
}



window.addEventListener('keydown', function (e) {

 
    for (let i = 0; i < btn.length; i++) {
        if (e.key == btn[i].getAttribute('keyname') || e.key == btn[i].getAttribute('lowerCaseName')) {
            btn[i].classList.remove('active')
            btn[i].classList.add('remove')
        }
        

        setTimeout(() => {
            btn[i].classList.remove('remove')
        }, 200)
    }
})
window.addEventListener('keyup', function (e) {
    for (let i = 0; i < btn.length; i++) {
        if (e.key == btn[i].getAttribute('keyname') || e.key == btn[i].getAttribute('lowerCaseName')) {
            btn[i].classList.remove('active')
            btn[i].classList.add('remove')

            // alert("ol")
        }
        // if () {
        //     btn[i].classList.remove('active')
        //     btn[i].classList.add('remove')

        //     // alert("ol")
        // }

        setTimeout(() => {
            btn[i].classList.remove('rem')
        }, 200)
    }
})