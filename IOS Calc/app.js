const result = document.querySelector(".result");
const num = document.querySelectorAll("span");
const opr = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear")
console.log(num);
const equal = document.querySelector(".equal")
// console.log(equal);



num.forEach(function(element){
    element.onclick = function(e){
        if (result.textContent=="0"){
            result.textContent = "";
        }
        result.textContent += this.textContent
    }
    // console.log(result.textContent);
})

clear.addEventListener("click",function(){
    result.textContent = "0";
    location.reload()
})

equal.addEventListener("click",function(){
    result.textContent = eval(result.textContent)
})