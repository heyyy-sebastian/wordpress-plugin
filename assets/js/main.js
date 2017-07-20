// Javascript
jQuery(document).ready(function($){
  // The ajax endpoint information and payload schema
  $(document).on('submit', '#email-form', function (e) {
    e.preventDefault();
    var data = {
      action: "generic_email_ajax_email_submit",
      email: $('#ge-email-address').val(),
      secondary_optin: $('#ge-optin').is(':checked'),
    }

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
        alert("We're sorry, seems like something went wrong.  Please try again later.");
      }
    })//end ajax call
  })//end form submission
}); //end wrapper fn
