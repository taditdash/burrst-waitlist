$(document).ready(function() {
    $('#btnJoinWaitlist').click(function() {
		if (!$.trim($('#txtEmail').val())) {
			alert("Please enter your email");
			return;
		}
		
		//let email = document.getElementsByClassName("input--waitlistap");
		//email[0], 
		var input = document.querySelector("form input");
		changeValue(input, $('#txtEmail').val())
		
		//$('.input--waitlistapi').val($('#txtEmail').val());
		$('.button--waitlistapi').click();
	});
});

function changeValue(input,value){

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    nativeInputValueSetter.call(input, value);

    var inputEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(inputEvent);
}