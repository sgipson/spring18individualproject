/* global $ */

$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstname: "required",
            lastname: "required",
            email:
                {
                    required: true,
                    email: true
                },    

        },
        // Specify validation error messages
        messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});


$(document).ready(function() {

$('#gallery').cycle({ 
    fx:      'turnDown', 
    delay:   -4000 
});
});






$(document).ready(function(){
$('#tabs div.tab').hide(); // Hide all divs
$('#tabs div.tab:first').show(); // Show the first div
$('#tabs dav.tab ul li:first').addClass('active'); // Set the class of the first link to active
$('#tabs ul li a').click(function(){ //When any link is clicked
$('#tabs div.tab  ul li').removeClass('active'); // Remove active class from all links
$(this).parent().addClass('active'); //Set clicked link class to active
var currentTab = $(this).attr('href'); // Set variable currentTab to value of href attribute of clicked link
$('#tabs div.tab').hide(); // Hide all divs
$(currentTab).show(); // Show div with id equal to variable currentTab
return false;
});
});