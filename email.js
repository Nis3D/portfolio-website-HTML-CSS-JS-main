    function sendMail() {
      const nameElement = document.getElementById("name");
      const emailElement = document.getElementById("email");
      const messageElement = document.getElementById("message");

      if (nameElement && nameElement.value) {
        var params = {
          name: nameElement.value,
          email: emailElement.value,
          message: messageElement.value,
        };
      } else {
        console.error("Name field not found or empty!");
        return; // Prevent further execution if name is missing
      }
      const serviceID="service_bor7rrs";
      const templateID="template_294wlnt";

      // Assuming emailjs.send is a promise-based function
      emailjs.send(serviceID, templateID, params)
        .then(res => {
          console.log("Email sent successfully!", res);
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          alert("Your message sent successfully");
        })
        .catch(err => {
          console.error("Error sending email:", err);
          alert("An error occurred while sending your message. Please try again later.");
        });
    }
  