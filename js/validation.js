function checkUsername() {
    
    jQuery.ajax({
    url: "check_email.php",
    data:'email='+$("#email").val(),
    type: "POST",
    success:function(data){
  $("#check-username").html(data);
            
            // Disable button if email already exists
            if (data.includes("Sorry email already exists")) {
				$(".forward").css('pointer-events', 'none');
            } else {
               
				 $(".forward").css('pointer-events', 'auto');
            }
    },
    error:function (){}
    });
}
