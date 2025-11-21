let inp = document.getElementById("inp");
let button = document.querySelectorAll(".button");
let num = ""
let _status = ""
let toggle = false
const lamp = document.getElementById("lamp")
let power = ""

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
                    lamp.classList.remove("bg-green-600")
                    lamp.classList.add("bg-gray-700")
                    lamp.classList.remove("lampShadow")

                    inp.value = ""
                    _status = ""
                    num = ""
                }else{
                    inp.removeAttribute("readOnly")
                    toggle = !toggle
                    lamp.classList.remove("bg-gray-700")
                    lamp.classList.add("bg-green-600")
                    lamp.classList.add("lampShadow")

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
            else if (button[i].children[0].innerText == "xⁿ" && toggle == true) {
                if(num == ""){
                    num = +inp.value
                    inp.value = ""
                }else{
                    power = num
                    for(let i = 1; i < inp.value; i++){
                        num *= +power
                    }
                    inp.value = ""
                }     
                _status = "xⁿ"
                
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
                }else if (_status == "xⁿ"){
                    power = num
                    for(let i = 1; i < inp.value; i++){
                        num *= +power
                    }
                    inp.value = num
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