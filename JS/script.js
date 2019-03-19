var btnContainer = document.getElementById("navbar");

var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

var mainModal = "myModal";
var mainBtn = "myBtn";

function varDeclare() {
  var modal = document.getElementById(mainModal);

  var btn = document.getElementById(mainBtn);

  btn.onclick = function() {
    modal.style.display = "block";
  }

  modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

varDeclare()

mainModal += "2";
mainBtn += "2";
varDeclare()

var mainModal = "myModal";
var mainBtn = "myBtn";
mainModal += "3";
mainBtn += "3";
varDeclare()

var mainModal = "myModal";
var mainBtn = "myBtn";
mainModal += "4";
mainBtn += "4";
varDeclare()
