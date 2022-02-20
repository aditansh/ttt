function func(){
    var c1,c2,c3,c4,c5,c6,c7,c8,c9;
    c1=document.getElementById("c1").value;
    c2=document.getElementById("c2").value;
    c3=document.getElementById("c3").value;
    c4=document.getElementById("c4").value;
    c5=document.getElementById("c5").value;
    c6=document.getElementById("c6").value;
    c7=document.getElementById("c7").value;
    c8=document.getElementById("c8").value;
    c9=document.getElementById("c9").value;

    if ((c1=="x" && c2=="x" && c3=="x") || (c4=="x" && c5=="x" && c6=="x") || (c7=="x" && c8=="x" && c9=="x") || (c1=="x" && c4=="x" && c7=="x") || (c2=="x" && c5=="x" && c8=="x") || (c3=="x" && c6=="x" && c9=="x") || (c1=="x" && c5=="x" && c9=="x")||(c3=="x" && c5=="x" && c7=="x")){
        resultx()
        document.getElementById("c1").disabled=true;
        document.getElementById("c2").disabled=true;
        document.getElementById("c3").disabled=true;
        document.getElementById("c4").disabled=true;
        document.getElementById("c5").disabled=true;
        document.getElementById("c6").disabled=true;
        document.getElementById("c7").disabled=true;
        document.getElementById("c8").disabled=true;
        document.getElementById("c9").disabled=true;
    }
    else if((c1=="o" && c2=="o" && c3=="o") || (c4=="o" && c5=="o" && c6=="o") || (c7=="o" && c8=="o" && c9=="o") || (c1=="o" && c4=="o" && c7=="o") || (c2=="o" && c5=="o" && c8=="o") || (c3=="o" && c6=="o" && c9=="o") || (c1=="o" && c5=="o" && c9=="o")||(c3=="o" && c5=="o" && c7=="o")){
        resulto()
        document.getElementById("c1").disabled=true;
        document.getElementById("c2").disabled=true;
        document.getElementById("c3").disabled=true;
        document.getElementById("c4").disabled=true;
        document.getElementById("c5").disabled=true;
        document.getElementById("c6").disabled=true;
        document.getElementById("c7").disabled=true;
        document.getElementById("c8").disabled=true;
        document.getElementById("c9").disabled=true;
    }  
}

function start(){
    if (document.getElementById("o").checked==true){
        flag=0;
    }
    else {
        flag=1;
    }
    document.getElementById("x").disabled=true
    document.getElementById("o").disabled=true
}

function fb1(){
    if (flag==1){
        document.getElementById("c1").value="x";
        document.getElementById("c1").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c1").value="o";
        document.getElementById("c1").disabled=true;
        flag=1;
    }
}

function fb2(){
    if (flag==1){
        document.getElementById("c2").value="x";
        document.getElementById("c2").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c2").value="o";
        document.getElementById("c2").disabled=true;
        flag=1;
    }
}

function fb3(){
    if (flag==1){
        document.getElementById("c3").value="x";
        document.getElementById("c3").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c3").value="o";
        document.getElementById("c3").disabled=true;
        flag=1;
    }
}

function fb4(){
    if (flag==1){
        document.getElementById("c4").value="x";
        document.getElementById("c4").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c4").value="o";
        document.getElementById("c4").disabled=true;
        flag=1;
    }
}

function fb5(){
    if (flag==1){
        document.getElementById("c5").value="x";
        document.getElementById("c5").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c5").value="o";
        document.getElementById("c5").disabled=true;
        flag=1;
    }
}

function fb6(){
    if (flag==1){
        document.getElementById("c6").value="x";
        document.getElementById("c6").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c6").value="o";
        document.getElementById("c6").disabled=true;
        flag=1;
    }
}

function fb7(){
    if (flag==1){
        document.getElementById("c7").value="x";
        document.getElementById("c7").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c7").value="o";
        document.getElementById("c7").disabled=true;
        flag=1;
    }
}

function fb8(){
    if (flag==1){
        document.getElementById("c8").value="x";
        document.getElementById("c8").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c8").value="o";
        document.getElementById("c8").disabled=true;
        flag=1;
    }
}

function fb9(){
    if (flag==1){
        document.getElementById("c9").value="x";
        document.getElementById("c9").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("c9").value="o";
        document.getElementById("c9").disabled=true;
        flag=1;
    }
}

function resultx(){
    document.getElementById("print").innerHTML="x wins";
}

function resulto(){
    document.getElementById("print").innerHTML="o wins";
}

function reset(){
    location.reload()
}