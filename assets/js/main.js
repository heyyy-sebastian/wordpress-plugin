// Javascript
jQuery(document).ready(function($){
  // The ajax endpoint information and payload schema
  $(document).on('submit', '#email-form', function (e) {
    e.preventDefault();
    var data = {
      action: "generic_email_submit",
      email: $('ge-email-address').val(),
      secondary_optin: $('#ge-optin').is(':checked'),
    }

    $.ajax({
      url: ajaxurl,
      method: 'post',
      data: data,
      success: function () {
        alert("You've successfully signed up for our newsletter!")
      },
      error: function () {
        alert("Uh oh, something went wrong")
      }
    })
  })
});
