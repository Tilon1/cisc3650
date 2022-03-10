const audio = new Audio('https://www.soundjay.com/buttons/beep-01a.mp3')
const button = document.querySelector('button')

button.addEventListener('click', (e) => {
  audio.play()
})

function addItem(){
        var ul=document.getElementById("list");
        var li=document.createElement("li");
        var inputValue=document.getElementById("candidate").value;
        var t=document.createTextNode(inputValue);
        var checkbox=document.createElement("input");
        var date =document.createElement("input");
        if(inputValue==""){
           alert("enter a value");
        }
        else{
        date.type="date";
        li.appendChild(t);
        li.setAttribute("id", "box"); // added line
        ul.appendChild(li);
        checkbox.type="checkbox";
        checkbox.value="value";
        li.appendChild(checkbox);
        li.appendChild(date);
        alert(li.id);
        }
        

        var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
        
        
}
