let num = 0;




function createPTag(){
let element = document.getElementById("counter");
let pTag = document.createElement("p");
pTag.setAttribute('id','p1');
let pText = document.createTextNode("0");
pTag.appendChild(pText);
element.appendChild(pTag);

}

function createButtons(){
let btnParentMinus = document.getElementsByTagName("div")[3];
let btnParentPlus = document.getElementsByTagName("div")[4];
let buttonMinus = document.createElement("button");
let buttonPlus = document.createElement("button");
btnParentMinus.appendChild(buttonMinus);
btnParentPlus.appendChild(buttonPlus);
buttonMinus.classList.add("buttonMinus");
buttonPlus.classList.add("buttonPlus");
}


function counterAdd(){
num++
let oldP = document.getElementById("p1").innerHTML=num;
}

function counterSubstract(){
  num--
  let oldP = document.getElementById("p1").innerHTML=num;

}
