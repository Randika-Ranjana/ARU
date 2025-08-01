// Optional: Add more interactivity here
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded");
});

window.addEventListener("load", () => {
  const overlay = document.getElementById("handshake-overlay");
  const video = document.getElementById("handshake-video");
  
  video.addEventListener("ended", () => {
    overlay.style.opacity = 0;
    setTimeout(() => overlay.style.display = "none", 1000);
  });
});