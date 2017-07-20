// Javascript
jQuery(document).ready(function($){

  //helper function: client-side check that email field is complete
  function checkEmailField(data){
    //remove whitespace & return empty form field
    var emptyFields = $("input#ge-email-address").filter(function() {
              return $.trim(this.value) === "";
           });
    console.log(emptyFields)
    //if the email field is empty, trigger error alert
          if (emptyFields.length === 1) {
            console.log("nope");
            alert("An email address is required.");
            return;
          }
          //give data back so post request can access it
          return data;
  };//end form fields check

  // The ajax endpoint information and payload schema
  $(document).on('submit', '#email-form', function (e) {
    e.preventDefault();

    var data = {
      action: 'generic_email_ajax_email_submit',
      email: $('#ge-email-address').val(),
      secondary_optin: $('#ge-optin-2').is(':checked'),
      tertiary_optin: $('#ge-optin-3').is(':checked')
    }

    //trigger ajax call after email field is checked
    if (checkEmailField(data)){
      //$.post might be easier here
      $.ajax({
        url: ajaxurl,
        method: 'post',
        data: data,
        success: function () {
          alert("Thanks for signing up for our email newsletter!");
          //trigger transition to hide form
          $('.generic-email-widget').addClass('slideUp');
        },
        error: function () {
          alert("We're sorry, seems like something went wrong.  Please try again later.")
        }
      })//end ajax call
    } // end if statement

  })//end form submission
});//end wrapper function
