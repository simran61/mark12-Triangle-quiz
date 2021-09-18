const first = document.querySelector("#first")
const second = document.querySelector("#second")
const third = document.querySelector("#third")

const btn = document.querySelector(".btn")

btn.addEventListener('click', ()=>{
    let a = Number(first.value)
    let b = Number(second.value)
    let c = Number(third.value)
    
    let sum = a+b+c;

    if(first.value === "" || second.value ==="" || third.value ===""){
        document.getElementById('after_submit').style.visibility="visible";
        document.getElementById('after_submit').innerHTML="Please enter all the values";

    } else if(first.value <= 0 || second.value <= 0 || third.value <= 0){
        document.getElementById('after_submit').style.visibility="visible";
        document.getElementById('after_submit').innerHTML="Angles cannot be negative or zero";
    } 

    else if(sum===180){
        document.getElementById('after_submit').style.visibility="visible";
        document.getElementById('after_submit').innerHTML="Yes !! These angles make a triangle.";

    }else{
        document.getElementById('after_submit').style.visibility="visible";
        document.getElementById('after_submit').innerHTML="Sorry, these angle cannot make a triangle";
    }
});


