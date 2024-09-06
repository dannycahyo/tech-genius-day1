document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    // Validate Email Format
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
      emailError.textContent = "Invalid email format";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Password Strength Check
    const passwordValue = passwordInput.value;
    const passwordStrength = checkPasswordStrength(passwordValue);
    if (passwordStrength !== "Strong") {
      passwordError.textContent = `Password is ${passwordStrength}`;
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (isValid) {
      // Submit the form or perform further actions
      alert("Form submitted successfully!");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function checkPasswordStrength(password) {
    if (password.length < 6) {
      return "too short";
    }
    if (!/[A-Z]/.test(password)) {
      return "missing uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "missing lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "missing number";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "missing special character";
    }
    return "Strong";
  }
});
