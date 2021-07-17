const btn = document.querySelectorAll(".content");
const result = document.querySelector(".result");

for(let i = 0; i < btn.length; i++) {
    if(btn[i].innerHTML === "="){
        btn[i].addEventListener("click", calculate)
    }else{
        btn[i].addEventListener("click", addToButtonValue(i))
    }
}

function addToButtonValue(i){
    return () => {
        if(btn[i].innerHTML === "+"){
            result.innerHTML += "+"
        }else if(btn[i].innerHTML === "-"){
            result.innerHTML += "-"
        }else if(btn[i].innerHTML === "x"){
            result.innerHTML += "*"
        }else if(btn[i].innerHTML === "÷"){
            result.innerHTML += "/"
        }else if(btn[i].innerHTML === "AC"){
            result.innerHTML = "0"
        }else if(btn[i].innerHTML === ","){
            result.innerHTML += "."
        }else if(btn[i].innerHTML === "+/-"){
            if(Math.sign(Number(result.value)) !== 0){
                result.innerHTML *= -1
            }else{
                result.innerHTML = "0";
            }
        }else if(btn[i].innerHTML === "DEL"){
            result.innerHTML = String(result.innerHTML).slice(0,-1);
            if((result.innerHTML).length === 0){
                result.innerHTML = "0"
            }
        }else{
            if(result.innerHTML === "0" || result.innerHTML === "infinite") {
                result.innerHTML = btn[i].innerHTML
            }else{
            result.innerHTML += btn[i].innerHTML
            }
        }
    }
}

function calculate(){
    if(result.innerHTML.includes("/0")){
        alert("Zero Divison Error")
        return result.innerHTML = "infinite"
    }else{
        return result.innerHTML = eval(result.innerHTML);
    }
}


