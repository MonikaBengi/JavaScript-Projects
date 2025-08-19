// --- Simple auto slideshow with dots ---

let slideIndex = 0; // start before first so we can ++ first
let slideTimer = null;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots   = document.getElementsByClassName("dot");
  if (slides.length === 0) return;

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // remove active from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // next index (wrap)
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  // show current + activate dot
  slides[slideIndex - 1].style.display = "block";
  if (dots.length >= slideIndex) dots[slideIndex - 1].classList.add("active");

  // schedule next change
  slideTimer = setTimeout(showSlides, 3000); // 3s
}

// allow clicking dots (optional)
function currentSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n - 1; // so showSlides() will advance to n
  showSlides();
}

// start after DOM is ready (your script is at the end, de ez biztosra megy)
document.addEventListener("DOMContentLoaded", showSlides);

// expose for inline handlers if later hozzáadsz kattintható pontokat
window.currentSlide = currentSlide;

