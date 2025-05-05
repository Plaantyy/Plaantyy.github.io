window.onload = function () {
  const charCount = document.getElementById("charCount");
  const inputField = document.getElementById("mytext");
  const playButton = document.getElementById("Play");

  playButton.disabled = true;

  inputField.addEventListener("input", function () {
    const length = inputField.value.length;
    charCount.textContent = `${length}/15`;

    if (length > 0 && length <= 15) {
      playButton.disabled = false;
    } else {
      playButton.disabled = true;
    }
  });

  document.getElementById("Submit").onclick = function () {
    let username = inputField.value.trim();

    if (username.length > 15) {
      alert("Username cannot be longer than 15 characters.");
    } else if (username) {
      localStorage.setItem("username", username);
      console.log("Username saved:", username);

      alert(`Username "${username}" has been successfully entered!`);
    } else {
      alert("Please enter a username.");
    }
  };
};
