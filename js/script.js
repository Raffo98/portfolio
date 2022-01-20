//show preview image on hover

function showPreviewImage(item) {
  console.log("AO", item);
  document.getElementById("preview-image").classList.remove("hide");
}

document.querySelectorAll("#projects-wrapper ul li a").forEach((element, index) => {
  console.log("trasuto");
  element.addEventListener("mouseover", showPreviewImage(index));
});
