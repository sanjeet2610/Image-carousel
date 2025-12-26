const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imgContainer = document.querySelector(".image-container");
const dotContainer = document.querySelector(".dot-container");
const slides = document.querySelectorAll("img");

const length = slides.length;
let currIndex = 0;

slides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.classList.add("dot");
  dotContainer.appendChild(dot);
});
const dotList = document.querySelectorAll(".dot");
dotList[0].classList.add("active");

nextBtn.addEventListener("click", () => {
  clearState();
  currIndex++;
  updateImg();
  updateDot(dotList[currIndex], currIndex);
});

prevBtn.addEventListener("click", () => {
  clearState();
  currIndex--;
  updateImg();
  updateDot(dotList[currIndex], currIndex);
});

dotList.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearState();
    updateDot(dot, index);
  });
});

function updateDot(dot, index) {
  currIndex = index;
  slides[currIndex].classList.add("active");
  dot.classList.add("active");
}

function updateImg() {
  if (currIndex >= length) {
    currIndex = currIndex % length;
  }
  if (currIndex < 0) {
    currIndex = length - 1;
  }
  slides[currIndex].classList.add("active");
}

function clearState() {
  slides[currIndex].classList.remove("active");
  dotList[currIndex].classList.remove("active");
}

setInterval(() => {
  nextBtn.click();
}, 5000);
