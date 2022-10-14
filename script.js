const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
 button.addEventListener('click', () => {
   const offset = button.dataset.carouselButton === "next" ? 1 : -1;

   //selecting the button, then the parent element, then the slide(ul)
   const slides = button
     .closest("[data-carousel]")
     .querySelector("[data-slides]");

   //geeting the active slide which  has the data-active attribute on it
   const activeSlide = slides.querySelector("[data-active]");

   //getting the new index, but first convert slide to an array
   let newIndex = [...slides.children].indexOf(activeSlide) + offset;

   if (newIndex < 0) newIndex = slides.children.length - 1;
   if (newIndex >= slides.children.length) newIndex = 0;

   //add the dataset active class or attribute to our currently new active side
   slides.children[newIndex].dataset.active = true;
   //this removes it from the active slide that was active before
   delete activeSlide.dataset.active;
 });
});

