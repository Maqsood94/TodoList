    //function doAction(value)
    //{
    //    // Don't really have anything to set...just show the value
    //    //alert(value);
    //}


    //function getElements() {
    //    var x=document.getElementsByName("myInput")
    //    alert(x.length + " elements!")
    //}


    function myFunction() {
        var node = document.createElement("LI");
        var textnode = document.createTextNode("Water");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    }
