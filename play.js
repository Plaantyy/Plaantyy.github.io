document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("Play");

  playButton.onclick = function () {
    const username = localStorage.getItem("username");

    if (username) {
      window.location.href = "quiz.html";
    } else {
      alert("Please enter a username to play.");
    }
  };
});
