 alert("fileyui");
 function myFunction() {
  alert("Hello! I am an alert box!");
}
   function toggleTheme() {
  window.theme = typeof window.theme === "string" ? window.theme : "light";
  var switchToTheme = window.theme === "light" ? "dark" : "light";
  window.theme = switchToTheme;
  document.querySelector("body").setAttribute("data-theme", switchToTheme);
}

 