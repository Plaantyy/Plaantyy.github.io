window.onload = function () {
    const username = localStorage.getItem("username");
    document.getElementById("userDisplay").textContent = username || "Guest";
};
