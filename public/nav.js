/* Toggle between adding and removing the "responsive" class to myMenu when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "myMenu") {
      x.className += " responsive";
    } else {
      x.className = "myMenu";
    }
  }