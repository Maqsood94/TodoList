var input = document.getElementById("input");

function addItem(){
    var ul = document.getElementById("Todolist");
    var li = document.createElement("li");
    var p = document.createElement("p");
    var del = document.createElement("img");
    var up = document.createElement("img");
    var chkBox=document.createElement("input");

    del.setAttribute("src","61391.png");
    del.setAttribute("onclick", "deleteItem()");

    up.setAttribute("src","update-icon.png");
    up.setAttribute("onclick","updateItem()");

    p.innerText=input.value;
    chkBox.setAttribute("type","checkbox");
    chkBox.setAttribute("onclick","Check()");

    li.appendChild(chkBox);
    li.appendChild(p);
    li.appendChild(del);
    li.appendChild(up);
    ul.appendChild(li);

 }
function Check() {
//console.log(event);
if(event.target.checked)
{
    var target = event.target;
    i = target.parentElement.children[1];
    i.setAttribute("class","para");

}
else
{

    i.setAttribute("class"," ");
}


}

function updateItem(){

    var target = event.target;
    var i;
    i = target.parentElement.children[0];
    console.log(i);
    i.innerText = input.value;


}
  function deleteItem(){

   var x = event.target.parentElement;
      x.remove();

    }