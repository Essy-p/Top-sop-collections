let slideIndex = 0;
showSlides();

function showSlides(){
  let slides = document.getElementsByClassName("slide");

  //Hide all slides
for (let i = 0; i < slides.length; i++){
  slides[i].style.display = "none";
}

slideIndex++;

//Reset to first slide
if (slideIndex > slides.length){
  slideIndex = 1;
}

//Show selected slide
slides[slideIndex-1].style.display = "block";

//Change slide every 3 seconds
setTimeout(showSlides, 3000);
}

