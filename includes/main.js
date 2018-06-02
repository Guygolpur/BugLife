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

function ring()
{
	document.getElementById("bellStep3").classList.toggle("active")
}

function light()
{
	document.getElementById("lightOffStep3").classList.toggle("active")
}