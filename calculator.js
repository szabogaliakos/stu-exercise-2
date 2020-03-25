function clickAdd(){
    var a = parseInt(document.getElementById("inp_a").value);
    var b = parseInt(document.getElementById("inp_b").value);
    var result = a + b;
    document.getElementById("result").innerHTML = result;
}
function clickSubstract(){
    var a = parseInt(document.getElementById("inp_a").value);
    var b = parseInt(document.getElementById("inp_b").value);
    var result = a - b;
    document.getElementById("result").innerHTML = result;
}
function clickMultiply(){
    var a = parseInt(document.getElementById("inp_a").value);
    var b = parseInt(document.getElementById("inp_b").value);
    var result = a * b;
    document.getElementById("result").innerHTML = result;
}
function clickDivide(){
    var a = parseInt(document.getElementById("inp_a").value);
    var b = parseInt(document.getElementById("inp_b").value);
    var result = a / b;
    document.getElementById("result").innerHTML = result;
}
function clickPow(){
    var a = parseInt(document.getElementById("inp_a").value);
    var b = parseInt(document.getElementById("inp_b").value);
    var result = Math.pow(a, b);
    document.getElementById("result").innerHTML = result;
}