let btn = document.querySelectorAll(".card button.butt");
let divExtension = document.querySelectorAll(".q-parag");

//undisplay the answer paragraphs by default.
let answerParagraph = document.querySelectorAll(".container .card p.answer");
answerParagraph.forEach((p) => {
  p.style.display = "none";
});

//looping on buttons in the document.
btn.forEach((b) => {
  b.innerHTML = `<i class="fa-solid fa-plus"></i>`;
  //add click event to the button to display the answer paragraph.
  b.addEventListener("click", (e) => {
    //create close button to close the answer paragraph.
    let closeBtn = document.createElement("button");
    closeBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    closeBtn.className = "butt";

    //adding rotate animation to close button.
    closeBtn.addEventListener("mouseenter", (e) => {
      closeBtn.style.animation = "rotate 0.5s ease-in-out forwards";
    });
    closeBtn.addEventListener("mouseleave", (e) => {
      closeBtn.style.animation = "rotate-back 0.5s ease-in-out";
    });
    //undisplay all answer paragraphs.
    answerParagraph.forEach((parag) => {
      parag.style.display = "none";
      parag.previousElementSibling.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    });

    //display answer paragaraph below the clicked button.
    b.parentElement.lastElementChild.style.display = "block";

    //replace the collapse button with the close button.
    b.replaceWith(closeBtn);

    //add click event to the close button to close the opened answer paragraph.
    closeBtn.addEventListener("click", (e) => {
      closeBtn.parentElement.lastElementChild.style.display = "none";
      // replace the close button with the collapse button.
      closeBtn.replaceWith(b);
    });
  });
});

//add rotate animation on hover over collapse button.
btn.forEach((b) => {
  b.addEventListener("mouseenter", (e) => {
    b.style.animation = "rotate 0.5s ease-in-out forwards";
  });
  b.addEventListener("mouseleave", (e) => {
    b.style.animation = "rotate-back 0.5s ease-in-out";
  });
});
