// Splash Auto Hide
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("languageSection").classList.remove("hidden");
}, 3000);

// Skip Button
document.getElementById("skipBtn").addEventListener("click", () => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("languageSection").classList.remove("hidden");
});

function nextSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function sendOTP() {
    document.getElementById("otpBox").classList.remove("hidden");
}

function loginUser() {
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

function showForm() {
    document.getElementById("formSection").classList.remove("hidden");
}