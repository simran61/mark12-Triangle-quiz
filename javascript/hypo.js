const first= document.querySelector("#first");
const second= document.querySelector("#second");

const btn= document.querySelector(".btn");

btn.addEventListener('click', () =>{
    var a = Number(first.value);
    var b = Number(second.value)

    var ans= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    if(first.value === "" || second.value ===""){
        document.getElementById('after_submit').style.visibility="visible";
        document.getElementById('after_submit').innerHTML="Please enter all the values";

    } else if(first.value <= 0 || second.value <= 0){
        document.getElementById('after_submit').style.visibility="visible";
        document.getElementById('after_submit').innerHTML="Angles cannot be negative or zero";
    } 
    else{
        document.getElementById('after_submit').style.visibility="visible";
        document.getElementById('after_submit').innerHTML="Your Hypotenuse is "+ans;
    }
});