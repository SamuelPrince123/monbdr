const menuBtn = document.getElementById("menu-toggle");
const dashboard = document.getElementById("dashboard");
const mobileCenter = document.getElementById("mobile-center");

menuBtn.addEventListener("click", () => {
  dashboard.classList.toggle("show");
  mobileCenter.classList.toggle("hide");
});
