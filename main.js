/*Popup next pages */
$(document).ready(function(){
	$(".next-1").on("click", function(){
		$(".popup-form1,.popup-form2").addClass("active");
	});

	$(".prev-1").on("click", function(){
		$(".popup-form1,.popup-form2").removeClass("active");
	})


	$(".next-2").on("click", function(){
		$(".popup-form2,.popup-form3").addClass("active-2");
	});

	$(".prev-2").on("click", function(){
		$(".popup-form2,.popup-form3").removeClass("active-2");
	})
})


/* Close popup */
$("i.fas.fa-times").on("click", function(){
	$(".popup-box,.container").addClass("active");
})


/* On load */
$(window).on("load",function(){
	$(".popup-box,.container").addClass("active-2");
})