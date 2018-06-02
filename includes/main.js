$("document").ready(function() {
$(".share").on('click', function(e) {
  $(".fab").removeClass("no");
  if(e.target != this) return;
  $('.share, .fab').toggleClass("active");
});
	
	});

function ring()
{
	document.getElementById("bellStep3").classList.toggle("active")
}

function light()
{
	document.getElementById("lightOffStep3").classList.toggle("active")
}