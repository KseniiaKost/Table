const checkboxElements = document.querySelectorAll(
  'tbody input[type="checkbox"]'
);
const bankBtnElements = document.querySelectorAll(".bank-btn");
const bankReviewBtnElements = document.querySelectorAll(".bank-reviews-btn");
const hiddenTableElement = document.querySelector(".hidden-table");

bankBtnElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.textContent.includes("Банк ▼")) {
      element.innerHTML = "Банк &#9658;";
    } else {
      element.innerHTML = "Банк &#9660;";
    }
  });
});

bankReviewBtnElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.textContent.includes("Банк Отзывы ▼")) {
      element.innerHTML = "Банк Отзывы &#9658;";
    } else {
      element.innerHTML = "Банк Отзывы &#9660;";
    }
  });
});

function selectAllRows(checkbox) {
  checkboxElements.forEach((box) => {
    box.checked = checkbox.checked;
  });
}
