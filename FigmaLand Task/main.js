window.addEventListener("load",()=>{

  const arrow = document.querySelector("#arrow");
  const homeSection = document.querySelector("#home");

  window.addEventListener("scroll", () => {
    const homeRect = homeSection.getBoundingClientRect();
    if (homeRect.top <= 0 && homeRect.bottom > 0) {
      arrow.style.display = "none"; 
    } else {
      arrow.style.display = "block";
    }
  });

});  //end of load