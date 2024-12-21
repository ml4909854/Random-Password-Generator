// Character sets for password generation
const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}|;:',.<>?/"
  };
  
  // DOM elements
  const lengthSlider = document.getElementById("password-length");
  const lengthValue = document.getElementById("length-value");
  const passwordField = document.getElementById("password");
  const generateBtn = document.getElementById("generate-btn");
  const copyBtn = document.getElementById("copy-btn");
  
  const options = {
    uppercase: document.getElementById("uppercase"),
    lowercase: document.getElementById("lowercase"),
    numbers: document.getElementById("numbers"),
    symbols: document.getElementById("symbols")
  };
  
  // Update the slider value dynamically
  lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
  });
  
  // Generate a random password
  generateBtn.addEventListener("click", () => {
    const length = parseInt(lengthSlider.value);
    const selectedCharSets = Object.keys(options).filter(option => options[option].checked);
    
    if (selectedCharSets.length === 0) {
      alert("Please select at least one character type!");
      return;
    }
  
    const characters = selectedCharSets.map(option => charSets[option]).join("");
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    passwordField.value = password;
  });
  
  // Copy password to clipboard
  copyBtn.addEventListener("click", () => {
    if (!passwordField.value) {
      alert("No password to copy!");
      return;
    }
  
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  });
  