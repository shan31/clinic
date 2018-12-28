(function($) {

$(document).ready(function() {
  $("#login_form").submit(function(e){
  	e.preventDefault();
  	var email = $('#userEmail').val();
  	var password = $('#userPassword').val();
  	$(".error").remove();
  	if (email.length < 1) {
  		$('#userEmail').after('<span class="error">This field is required</span>');
  	} else {
      var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#userEmail').after('<span class="error">Enter a valid email</span>');
      }
    }
  	if (password.length < 8) {
  		$('#userPassword').after('<span class="error">This field is required</span>');
  	}
  });
});

  $('#showhidePassword').on('click', function(){
  	showhidePassword();
  });

  // Show/Hide Password Function
  function showhidePassword() {
  	var showpassword = $('#userPassword');
  	if (showpassword.attr("type") === "password") {
  		showpassword.attr("type", "text");
  	} else {
  		showpassword.attr("type", "password");
  	}
  }
})(jQuery);