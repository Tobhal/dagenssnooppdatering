window.onload = startup;

function showOlderDays(olderDaysShow) {
  if (localStorage.olderDaysShow == "true") {
    document.getElementsByClassName("olderDays")[0].style.display = "none";
    olderDaysShow.style.cursor = "s-resize"
    localStorage.olderDaysShow = false;
  } else {
    document.getElementsByClassName("olderDays")[0].style.display = "";
    olderDaysShow.style.cursor = "n-resize"
    localStorage.olderDaysShow = true;
  }
}

document.addEventListener("DOMContentLoaded", function (){
  // Do things before the page loads right after DOM load
  document.getElementsByClassName("olderDays")[0].style.display = "none";

  if (localStorage.olderDaysShow == "true") {
    document.getElementsByClassName("olderDays")[0].style.display = "";
    localStorage.olderDaysShow = true;
  } else {
    document.getElementsByClassName("olderDays")[0].style.display = "hidden";
    localStorage.olderDaysShow = false;
  }

  console.log("DOM loaded")
});

function startup() {
  // Do thing after the page loads
  let olderDaysShow = document.getElementById("olderDaysShow");
  olderDaysShow.addEventListener("click", function () {
    showOlderDays(olderDaysShow);
  })

  console.log("Site loaded")
}