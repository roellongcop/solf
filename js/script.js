// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");

var modalVideo = document.getElementById("modal-video");
var modalImagePreview = document.getElementById("modal-image-preview");

// Get the video items
var videoItems = document.getElementsByClassName("video-item");
var imagePreviews = document.getElementsByClassName("image-preview");
const galleryImages = document.querySelectorAll('.image-gallery .image-list img')

var galleries = document.querySelectorAll(".image-gallery");
// Loop through each gallery
galleries.forEach(function(gallery) {
  // Get the image preview and the img inside it for this gallery
  var imagePreview = gallery.querySelector(".image-preview");
  var previewImg = imagePreview.querySelector("img");

  // Get all the images in the image list for this gallery
  var imageList = gallery.querySelectorAll(".image-list img");

  // Loop through the images in the image list
  imageList.forEach(function(image) {
    image.addEventListener("click", function() {
      // Remove the 'active' class from all images in this gallery
      imageList.forEach(function(img) {
          img.classList.remove("active");
      });

      // Add the 'active' class to the clicked image
      image.classList.add("active");

      // Get the src attribute of the clicked image
      var newSrc = image.getAttribute("src");

      // Update the data-src attribute and the src attribute of the preview image
      imagePreview.setAttribute("data-src", newSrc);
      previewImg.setAttribute("src", newSrc);
    });
  });
});

// Loop through the video items to add the click event listener
for (var i = 0; i < videoItems.length; i++) {
  videoItems[i].addEventListener("click", function() {
    // Get the data-src attribute
    var videoSrc = this.getAttribute("data-src");
    // Set the src attribute of the video tag
    modalVideo.setAttribute("src", videoSrc);
    modalVideo.style.display = "block";
    // Display the modal
    modalImagePreview.style.display = "none";
    modal.style.display = "flex";
  });
}
for (var i = 0; i < imagePreviews.length; i++) {
  imagePreviews[i].addEventListener("click", function() {
    // Get the data-src attribute
    var imageSrc = this.getAttribute("data-src");
    // Set the src attribute of the video tag
    modalImagePreview.setAttribute("src", imageSrc);
    modalImagePreview.style.display = "block";

    modalVideo.style.display = "none";
    modal.style.display = "flex";
  });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modalContent) {
    modal.style.display = "none";
    modalVideo.removeAttribute("src");
  }
}