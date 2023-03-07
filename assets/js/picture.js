// Get the modal
var modal = document.createElement("div");
modal.classList.add("modal");

// Get the image and insert it inside the modal
var img = document.querySelector(".image .image img");
var modalImg = document.createElement("img");
modalImg.src = img.src;
var captionText = document.createElement("div");
captionText.classList.add("caption");
captionText.innerHTML = img.alt;
modal.appendChild(modalImg);
modal.appendChild(captionText);

// Get the close button and add functionality
var closeButton = document.createElement("span");
closeButton.classList.add("close");
closeButton.innerHTML = "&times;";
modal.appendChild(closeButton);
closeButton.onclick = function() {
  modal.style.display = "none";
};

// Add the modal to the page
document.body.appendChild(modal);

// Open the modal when the image is clicked
img.onclick = function(){
  modal.style.display = "block";
}
