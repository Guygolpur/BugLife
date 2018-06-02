$("document").ready(function() {

$(".share").on('click', function(e) {
  $(".fab").removeClass("no");
  if(e.target != this) return;
  $('.share, .fab').toggleClass("active");
});
	

	$(".footerStep3").on('click', function(e) {
  $(".faz").removeClass("bo");
  if(e.target != this) return;
  $('.footerStep3, .faz').toggleClass("active");
});
	});

/*-----------buttons-Step3-Mobile-------------*/
function ring()
{
	document.getElementById("bellStep3").classList.toggle("active")
}

function light()
{
	document.getElementById("lightOffStep3").classList.toggle("active")
}




/*-----------Pop-Up-Step3-Desktop-------------*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}