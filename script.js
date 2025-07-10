document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("category");
  const cards = document.querySelectorAll(".product-card");

  if (filter) {
    filter.addEventListener("change", (e) => {
      const value = e.target.value;

      cards.forEach((card) => {
        const title = card.textContent.toLowerCase();
        if (value === "all" || title.includes(value)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Contact form submission (mock only)
  const form = document.querySelector(".contact-form form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting Yatra Wear! We'll get back to you soon.");
      form.reset();
    });
  }
});
