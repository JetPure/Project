document.addEventListener("DOMContentLoaded", function () {
    const licenseInput = document.getElementById("licenseInput");
    const submitButton = document.getElementById("submitButton");
    const errorMessage = document.getElementById("errorMessage");
  
    // For demo purposes, we'll consider this as the correct license number
    const correctLicense = "123-456-789-000";
  
    // Format license number as user types
    licenseInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
  
      // Format with dashes
      if (value.length > 3) {
        value = value.slice(0, 3) + "-" + value.slice(3);
      }
      if (value.length > 7) {
        value = value.slice(0, 7) + "-" + value.slice(7);
      }
      if (value.length > 11) {
        value = value.slice(0, 11) + "-" + value.slice(11);
      }
  
      // Limit to 15 characters (including dashes)
      if (value.length > 15) {
        value = value.slice(0, 15);
      }
  
      e.target.value = value;
  
      // Clear error message when user starts typing again
      errorMessage.textContent = "";
    });
  
    // Handle form submission
    submitButton.addEventListener("click", function () {
      const licenseValue = licenseInput.value.trim();
  
      // Validate license format
      const licensePattern = /^\d{3}-\d{3}-\d{3}-\d{3}$/;
  
      if (!licenseValue) {
        errorMessage.textContent = "Please enter a license number";
        return;
      }
  
      if (!licensePattern.test(licenseValue)) {
        errorMessage.textContent = "Invalid format. Use: XXX-XXX-XXX-XXX";
        return;
      }
  
      // Check if license is correct
      if (licenseValue === correctLicense) {
        // Redirect to verify page
        window.location.href = "verify.html";
      } else {
        // Redirect to rejected page
        window.location.href = "rejected.html";
      }
    });
  
    // Allow Enter key to submit
    licenseInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        submitButton.click();
      }
    });
  });
  