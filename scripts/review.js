const reviewCount = document.querySelector("#reviewCount");

let numReviews = Number(localStorage.getItem("numReviews")) || 0;

numReviews++;

localStorage.setItem("numReviews", numReviews);

reviewCount.textContent = numReviews;