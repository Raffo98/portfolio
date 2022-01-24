//show preview image on hover

document
  .querySelectorAll("#projects-wrapper ul li a")
  .forEach((element, index) => {
    element.addEventListener("mouseover", function () {
      document.querySelector("#preview-image img").src =
        "assets/images/preview-images/" + `${index}` + ".png";
      document.getElementById("preview-image").classList.remove("hide");
    });
    element.addEventListener("mouseout", function () {
      document.getElementById("preview-image").classList.add("hide");
    });
  });

/* Carousel */
const items = document.querySelector(".items");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const total = items.children.length - 1;
const active = "active";
let current = 0;

const scrollToCurrent = () => {
  items.style.transform = `translateX(${current * -100}%`;
};

const scrollPrev = () => {
  if (current === 0) current = total + 1;
  current--;
  scrollToCurrent();
};

const scrollNext = () => {
  if (current === total) current = -1;
  current++;
  scrollToCurrent();
};

prev.addEventListener("click", scrollPrev);
next.addEventListener("click", scrollNext);