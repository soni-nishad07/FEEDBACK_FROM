// Wait for the document to be ready
$(document).ready(function () {
    // Initialize the country selection dropdown
    $("#country").intlTelInput({
      initialCountry: "auto",
      separateDialCode: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
    });
  
    // Initialize the phone number input field
    $("#phone").intlTelInput({
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
    });
  
    // Add change event listener to update the selected country flag and phone number
    $("#country").on("countrychange", function () {
      var countryData = $("#country").intlTelInput("getSelectedCountryData");
      var dialCode = countryData.dialCode;
      var flagUrl = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/" + countryData.iso2 + ".svg";
  
      // Update the phone number input field
      $("#phone").intlTelInput("setCountry", countryData.iso2);
  
      // Update the flag image
      $("#country").css("background-image", "url('" + flagUrl + "')");
  
      // Update the phone number input field's placeholder with the dial code
      $("#phone").attr("placeholder", "+" + dialCode);
    });
  });
  