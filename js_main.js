var x = document.getElementsByTagName('p')[0];
          
var is_happed = false;
var operator = false;
var last_index = 0;
function fun(num) {
    if (is_happed) {

        x.innerHTML = num;
        
        is_happed = false;
    }
    else {

        x.innerHTML = x.innerHTML + num;
    }
    operator = false;
    
}


async function funm(op) {
    var a = "";

    
   
    if (op == 1) {
        a = "+";
        chvalue(a);

    }
    else if (op == 2) {
        a = "-";
        chvalue(a)

    }
    else if (op == 3) {
        a = "*";
        chvalue(a)

    }
    else if (op == 4) {
        a = "/";
        chvalue(a)

    }
    else if (op == 5) {
        a = "%";
        chvalue(a)

    }
    else if (op == 6) {
        a = "**2";
        operator = false;
        chvaluenew(a ,last_index);
        
    }
    else if (op == 7) {
        a = "**1/2";
        operator = false;
        chvaluenew(a ,last_index);

    }
    else if (op == 8) {
        a = "**3";
        operator = false;
        chvaluenew(a ,last_index);

    }
    else if (op == 9) {
        a = "**-1";
        operator = false;
        chvaluenew(a ,last_index);

    }
    

  
}
function chvalue(a){
    if (operator) {
        var value = x.innerHTML;
        value = value.substring(0, value.length - 1);
        x.innerHTML = value + a;
    }
    else {
        x.innerHTML = x.innerHTML + a;

    }
    operator = true;
    last_index = String(x.innerHTML).length - 1 ;
}
var chvalnew = false ; 
function chvaluenew(a , last_index){
    var value = x.innerHTML;
    if (last_index == 0){
            x.innerHTML = "(" + value + a + ")";
    }
    else{

        value1 = value.substring(last_index +1, value.length);
        console.log("("+value1+")");  
        x.innerHTML =  value.substring(0,last_index+1 ) + "(" + value1 + a+")";
        operator = true;
    }
    chvalnew = true;
}

function result(ch) {
    document.getElementById('xwe').style.visibility = 'visible';
    if (ch == 0) {
        var b = x.innerHTML;
        x.innerHTML = "";
        console.log("clear");
        is_happed = false;
        operator = false;
        hist(b + " = " + x.innerHTML);
    }
    else if (ch == 1) {

        var y = x.innerHTML;
        var res = eval(y);
        x.innerHTML = res;
        console.log("==");
        is_happed = true;
        operator = false;
        hist(y + " = " + x.innerHTML);
    }
    else {
        x.innerHTML = "  <strong style='color: red;'>Error</strong>";
        console.log("error");
    }
    last_index = 0
}
function back(ops) {
    if (ops == 1){  //c
        x.innerHTML = "";
    }
    else if (ops == 2){  //ce
        x.innerHTML = "";
        is_happed = false;
        operator = false;

    }
    else if (ops == 3){ //back
        var value = x.innerHTML;
        if (String(value).endsWith(")")){
            var index = String(value).lastIndexOf("(");
            x.innerHTML = value.substring(0, index);
        }
        else{

            value = value.substring(0, value.length - 1);
            x.innerHTML = value;
        }
    }
  
}

function hist(str) {
    var div = document.createElement('h4');
    div.innerHTML = str;
    document.body.appendChild(div);
}

// if (String(x.innerHTML).length > 10){
    
// }

document.addEventListener('keyup', (event) => {
    var name = event.key;
    // var code = event.code;
    // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    
    if (name == 1){
        document.getElementById("1").click();
    }
    else if (name == 2){
        document.getElementById("2").click();
    }
    else if (name == 3){
        document.getElementById("3").click();
    }
    else if (name == 4){
        document.getElementById("4").click();
    }
    else if (name == 5){
        document.getElementById("5").click();
    }
    else if (name == 6){
        document.getElementById("6").click();
    }
    else if (name == 7){
        document.getElementById("7").click();
    }
    else if (name == 8){
        document.getElementById("8").click();
    }
    else if (name == 9){
        document.getElementById("9").click();
    }
    else if (name == 0){
        document.getElementById("0").click();
    }
    else if (name == 0){
        document.getElementById("0").click();
    }
    else if (name == "."){
        document.getElementById(".").click();
    }
    else if (name == "+"){
        document.getElementById("+").click();
    }
    else if (name == "-"){
        document.getElementById("-").click();
    }
    else if (name == "*"){
        document.getElementById("*").click();
    }
    else if (name == "/"){
        document.getElementById("/").click();
    }
    else if (name == "Enter"){
        document.getElementById("calc").click();
    }
    else if (name == "Backspace"){
        document.getElementById("clra").click();
    }
    else if (name == "^"){
        document.getElementById("clra").click();
    } 
  }, false);

