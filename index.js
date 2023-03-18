// targetting the html
const buttons = document.querySelectorAll("button");
const text = document.querySelector("#textarea")
const caps = document.querySelector("#caps");

const btn = document.querySelectorAll(".btn")
// console.log(text);

const tops = document.querySelectorAll("#top")

const shift = document.querySelectorAll("#shift")

// adding new array while shift is clicked
let array = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]

let array1 = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="]


// looping the buttons

// it will affect when the button is clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {

        if (e.target.id === "caps") {
            capslock()
        }
        else if (e.target.innerText !== "backspace" && e.target.innerText !== "tab" && e.target.innerText !== "caps" &&
            e.target.innerText !== "enter" && e.target.innerText !== "shift" && e.target.innerText !== ".com"
            && e.target.innerText !== "space" && e.target.innerText !== "@") {
            let values = e.target.innerText;
            text.value += values;

            // console.log(values);

        }

        else if (e.target.innerText == "shift") {


            shiftbutton()
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





// it will affect when the key is pressed
window.addEventListener('keyup', function (e) {
    if (e.key.toLowerCase() != "capslock" && e.key.toLowerCase() != "backspace" && e.key.toLowerCase() != "tab" && e.key.toLowerCase() != "enter"
        && e.key.toLowerCase() != "shift" && e.key.toLowerCase() != "space" && e.key.toLowerCase() != ".com" && e.key.toLowerCase() != "alt" && e.key.toLowerCase() != "control") {
        text.value += e.key
    }

    if (e.key.toLowerCase() == "capslock") {
        capslock()
    }


    if (e.key == "") {
        text.value += " ";
    }
    else if (e.key.toLowerCase() == "shift") {
    shiftbutton()

    }






    else if (e.key.toLowerCase() == "backspace") {
        text.value = text.value.slice(0, text.value.length - 1);
    }

    else if (e.key.toLowerCase() === "tab") {
        text.value += "    ";
    }
    else if (e.key.toLowerCase() === "alt") {
        text.value += ".com";
    }
    else if (e.key.toLowerCase() === "enter") {
        text.value += "\n";
    }




    for (let i = 0; i < btn.length; i++) {
        console.log(e.key);


        if (e.key.toLowerCase() == btn[i].innerText.toLowerCase()) {
            btn[i].classList.remove('active')
            btn[i].classList.add('remove')
        }



        // setTimeout(() => {
        //     btn[i].classList.remove('remove')
        // }, 200)
    }
})

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < btn.length; i++) {

        if (e.key == btn[i].innerText) {
            // btn[i].classList.remove('active')
            btn[i].classList.add('remove')

            // alert("ol")
        }



        setTimeout(() => {
            btn[i].classList.remove('remove')
        }, 200)
    }
})



function capslock() {
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



function shiftbutton() {
    for (let i = 0; i < tops.length; i++) {
        tops[i].classList.toggle("ones")

        if (tops[i].classList.contains("ones")) {



            for (let i = 0; i < array.length; i++) {
                tops[i].innerText = array[i]
                // console.log(array[i]);
            }
            // console.log(tops[i]);
        }
        else {


            for (let i = 0; i < array1.length; i++) {
                tops[i].innerText = array1[i]
            }

        }

    }
}
