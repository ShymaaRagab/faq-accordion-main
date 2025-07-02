let questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const isActive = q.nextElementSibling
      .querySelector("p")
      .classList.contains("active");

    // Close all 
    questions.forEach((el) => {
      const img = el.querySelector("img");
      const answer = el.nextElementSibling;
      const answerP = answer.querySelector("p");

      img.src = "./assets/images/icon-plus.svg";
      answerP.classList.remove("active");
    });

    // Re-open only if it wasn't already open
    if (!isActive) {
      const img = q.querySelector("img");
      const answer = q.nextElementSibling;
      const answerP = answer.querySelector("p");

      img.src = "./assets/images/icon-minus.svg";
      answerP.classList.add("active");
    }
  });
});
