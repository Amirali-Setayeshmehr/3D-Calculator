let inp = document.getElementById("inp");
let button = document.querySelectorAll(".button");
let num = ""
let _status = ""
let toggle = true


inp.addEventListener("keydown", (e) => {
    if (!((e.key >= "0" && e.key <= "9") || ["Backspace", "Delete","."].includes(e.key))){
        e.preventDefault();
    }
})
function keep_focous(){
    inp.focus();
    inp.selectiomStart = inp.selectionEnd = inp.value.length;

}

inp.addEventListener("input", keep_focous)
inp.addEventListener("click", keep_focous)
document.addEventListener("click", (e) => {
    if (e.target !== inp) {
        keep_focous();
    }
});

inp.addEventListener("paste", (e) => {
    e.preventDefault();
});

document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "r") {
        inp.blur();
    }
})

calc()
function calc(){
    button.forEach((item, i) => {
        button[i].addEventListener("click", () => {
            if ((((((button[i].children[0].innerText) >= "0") &&  ((button[i].children[0].innerText) <= "9") ) || (button[i].children[0].innerText) == "." ) && inp.value.length <= 10) && toggle == true){
                inp.value += button[i].children[0].innerText
            }
            else if (button[i].children[0].innerText == "C" && toggle == true ) {
                inp.value = ""
                _status = ""
                num = ""

            }
            else if (button[i].children[0].innerText == "+" && toggle == true) {
                if(num == ""){
                    num = +inp.value
                    inp.value = ""
                }else{
                    num += +inp.value
                    inp.value = ""
                }     
                _status = "+"
            }
            else if (button[i].children[0].innerText == "÷"&& toggle == true ) {
                if(num == ""){
                    num = +inp.value
                    inp.value = ""
                }else{
                    num /= +inp.value
                    inp.value = ""
                } 
                _status = "÷"
        
            }
            else if (button[i].children[0].innerText == "delete" && toggle == true) {
                inp.value = inp.value.slice(0, -1);
            }
            else if (button[i].children[0].innerText == "ON/OFF") {
                if (toggle === true) {
                    toggle = !toggle
                    inp.setAttribute("readOnly", true)
                }else{
                    toggle = !toggle
                    inp.removeAttribute("readOnly")
                    // button[4].children[4].style.backgroungColor = "#1f8821"

                }
            }
            else if (button[i].children[0].innerText == "-" && toggle == true) {
                if(num == ""){
                    num = +inp.value
                    inp.value = ""
                }else{
                    num -= +inp.value
                    inp.value = ""
                }   
                _status = "-"
    
            }
            else if (button[i].children[0].innerText == "x" && toggle == true) {
                if(num == ""){
                    num = +inp.value
                    inp.value = ""
                }else{
                    num *= +inp.value
                    inp.value = ""
                }     
                _status = "x"

            }
            else if (button[i].children[0].innerText == "x²" && toggle == true) {
                inp.value *= inp.value
                
            }
            else if (button[i].children[0].innerText == "%" && toggle == true) {
                inp.value /= 100
                
            }
            else if (button[i].children[0].innerText == "=" && toggle == true) {
                if (_status == "+"){
                    inp.value = +num + +inp.value
                }else if (_status == "-"){
                    inp.value = +num - +inp.value
                }else if (_status == "x"){
                    inp.value = +num * +inp.value
                }else {
                    if (_status == "÷") {
                        inp.value = +num / +inp.value

                    }
                    
                }
                _status = ""
                num = ""
            }
        }) 
    });
}