const first= document.querySelector("#first");
const second= document.querySelector("#second");

const btn= document.querySelector(".btn");

btn.addEventListener('click', () =>{
    var a = Number(first.value);
    var b = Number(second.value)

    var ans= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

    document.getElementById('after_submit').style.visibility="visible";
    document.getElementById('after_submit').innerHTML="Your Hypotenuse is "+ans;
});