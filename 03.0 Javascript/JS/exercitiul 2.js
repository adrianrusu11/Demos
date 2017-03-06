var name=document.getElementById("name").value;
var div=document.createElement("div");
var textNode=document.createTextNode(greeting);
div.appendChild(textNode);
document.body.appendChild(div);

function hello(){
    var name=document.getElementById("name").value;
    var div=document.createElement("div");
    var textNode=document.createTextNode(greeting);
    div.appendChild(textNode);
    document.body.appendChild(div);
}

function check() {
    if (name.length<5){
        greeting="Hello, " + name + " nice to meet you. You have a short name";
        hello();
    }
    if(name.length>=5 & name.length<=8){
        greeting="Hello, " + name + " nice to meet you...medium name";
        hello();
    }
    if(name.length>9){
        greeting="Hello, " + name + " nice to meet you...long name";
        hello();
    }
}
