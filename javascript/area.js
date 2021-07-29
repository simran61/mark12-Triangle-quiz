const ques1 = document.querySelector('.ques1');
const ques2 = document.querySelector('.ques2');
const ques3 = document.querySelector('.ques3');

const base = document.querySelector('.base');
const height = document.querySelector('.height');

const sidea = document.querySelector('.sidea');
const sideb = document.querySelector('.sideb');
const sidec = document.querySelector('.sidec');

const side1 = document.querySelector('.side1');
const side2 = document.querySelector('.side2');
const angle = document.querySelector('.angle');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

ques1.addEventListener('click', () => {
    document.getElementById('first').style.display = "block";
    document.getElementById('second').style.display = "none";
    document.getElementById('third').style.display = "none";

    btn1.addEventListener('click', () => {
        var b = Number(base.value);
        var h = Number(height.value)
        document.getElementById('after_submit').style.visibility = "visible";
        document.getElementById('after_submit').innerHTML = "Area is " + 0.5 * b * h;
    });

});

ques2.addEventListener('click', () => {
    document.getElementById('first').style.display = "none";
    document.getElementById('second').style.display = "block";
    document.getElementById('third').style.display = "none";

    btn2.addEventListener('click', () => {
        var as = Number(sidea.value);
        var bs = Number(sideb.value);
        var cs = Number(sidec.value);

        if ((as + bs)>cs && (bs + cs)>as && (as + cs)>bs) {
            var s = (as + bs + cs)/2;

            var ans = Math.sqrt(s * (s - as) * (s - bs) * (s - cs));
            
            document.getElementById('after_submit1').style.visibility="visible";
            document.getElementById('after_submit1').innerHTML="Area is "+ans;

        }
        else {
            document.getElementById('after_submit1').style.visibility = "visible";
            document.getElementById('after_submit1').innerHTML = "Invalid sides! Area cannot be calculated";
        }
    });
});

ques3.addEventListener('click', () => {
    document.getElementById('first').style.display = "none";
    document.getElementById('second').style.display = "none";
    document.getElementById('third').style.display = "block";

    btn3.addEventListener('click', () => {
        var s1 = Number(side1.value);
        var s2 = Number(side2.value);
        var ang = Number(angle.value);

        var ans = (s1*s2*Math.sin(ang*Math.PI/180))/2; 

        document.getElementById('after_submit2').style.visibility = "visible";
        document.getElementById('after_submit2').innerHTML = "Area is " + ans;
    });
});