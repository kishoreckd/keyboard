// targetting the html
const buttons = document.querySelectorAll("button");
const text = document.querySelector("#textarea")
const caps = document.querySelector("#caps");

const btn = document.querySelectorAll(".btn")
// console.log(text);

const tops = document.querySelectorAll("#top")

const shift = document.querySelectorAll("#shift")

const main =document.querySelector(".main")
const main1 =document.querySelector(".mains")

const changes =document.querySelector("#change")


// adding new array while shift is clicked
let array = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","{","}","|",":",'"',"<",">","?"]

let array1 = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=","[","]",'/',";","'",",",".","/"]


// looping the buttons

let checkonline = window.navigator.onLine ? "online":"offline";
if (checkonline =="online") {
    
// it will affect when the button is clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        if (e.target.innerText === "change") {
            changes.classList.toggle("changes")
            if (changes.classList.contains("changes")) {
                main.style.display="none"
                main1.style.display="flex"
            }
            else{
                main.style.display="flex"
                main1.style.display="none"
            }
          
        }

        if (e.target.id === "caps") {
            capslock()
        }
        else if (e.target.innerText !== "backspace" && e.target.innerText !== "delete" && e.target.innerText !== "tab" && e.target.innerText !== "caps" &&
            e.target.innerText !== "enter" && e.target.innerText !== "shift"&&e.target.innerText !== "E-mic" &&e.target.innerText !== "Tam-mic" && e.target.innerText !== ".com"
            && e.target.innerText !== "space" && e.target.innerText !== "@"  && e.target.innerText !== "change") {
            let values = e.target.innerText;
            text.value += values;

            // console.log(values);

        }

        else if (e.target.innerText == "shift") {
            shiftbutton()
        }
        else if (e.target.innerText == "E-mic") {
            engvoice()
        }
        else if (e.target.innerText == "Tam-mic") {
            tamvoice()
        }
    
    
        else if (e.target.innerText == "delete") {
            text.value = " ";
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
    if (e.key.toLowerCase() != "delete" && e.key.toLowerCase() != "wakeup" &&e.key.toLowerCase() != "capslock" && e.key.toLowerCase() != "backspace" && e.key.toLowerCase() != "tab" && e.key.toLowerCase() != "enter"
        && e.key.toLowerCase() != "shift" && e.key.toLowerCase() != "space" && e.key.toLowerCase() != ".com" && e.key.toLowerCase() != "alt" && e.key.toLowerCase() != "control") {
        text.value += e.key
    }

   else if (e.key.toLowerCase() == "capslock") {
        capslock()
    }
   
   else if (e.key.toLowerCase() == "delete") {
    text.value = " ";
        
    }


  else  if (e.key == "") {
        text.value += " ";
    }
    else if (e.key.toLowerCase() == "shift") {
    shiftbutton()

    }

    else if (e.key.toLowerCase() == "backspace") {
        text.value = text.value.slice(0, text.value.length - 1);
    }

    else if (e.key.toLowerCase() === "tab") {
        text.value += "   ";
    }
    else if (e.key.toLowerCase() === "control") {
        text.value += "@";
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
            // btn[i].classList.remove('active')
            btn[i].classList.add('remove')
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
                && buttons[k].innerText != "shift" && buttons[k].innerText != "delete" && buttons[k].innerText != "space" && buttons[k].innerText != ".com") {
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

}



function disable()
{
 document.onkeydown = function (e) 
 {
  return false;
 }
}


function engvoice() {
    let speech = "kishore";
    window.SpeechRecognition = window.SpeechRecognition
                    || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
   // console.log(recognition);
    recognition.interimResults = true;
    recognition.lang = "en-US";


    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        // console.log(transcript)
        text.value += transcript
    });

    if (speech == "kishore") {
        recognition.start();
        recognition.addEventListener('end', recognition.start);
    }

}



function engvoice() {
    let speech = "kishore";
    window.SpeechRecognition = window.SpeechRecognition
                    || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
   // console.log(recognition);
    recognition.interimResults = true;
    recognition.lang = "en-US";


    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        // console.log(transcript)
        text.value += transcript
    });

    if (speech == "kishore") {
        recognition.start();
        recognition.addEventListener('end', recognition.start);
    }

}

function tamvoice() {
    let speech = "kishore";
    window.SpeechRecognition = window.SpeechRecognition
                    || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
   // console.log(recognition);
    recognition.interimResults = true;
    recognition.lang = "ta-IN";


    recognition.addEventListener('result', (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        // console.log(transcript)
        text.value += transcript
    });

    if (speech == "kishore") {
        recognition.start();
        recognition.addEventListener('end', recognition.start);
    }

}