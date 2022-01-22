//show preview image on hover

document
  .querySelectorAll("#projects-wrapper ul li a")
  .forEach((element, index) => {
    element.addEventListener("mouseover", function () {
      document.querySelector("#preview-image img").src = "assets/images/preview-images/" + `${index}` + ".png";
      document.getElementById("preview-image").classList.remove("hide");

    });
    element.addEventListener("mouseout", function () {
      document.getElementById("preview-image").classList.add("hide");
    });
  });
