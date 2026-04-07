document.addEventListener("DOMContentLoaded", function () {

  // ================= PLAYER NAME =================
  const playerName = localStorage.getItem("playername");
  const playerNameDisplay = document.getElementById("playerNameDisplay");

  if (playerName && playerNameDisplay) {
    playerNameDisplay.innerText = `👤 Player: ${playerName}`;
  }

  // ================= EVENT GALLERY =================
  const eventPicturesBtn = document.querySelector(".event-pictures-btn");
  const picturesModal = document.getElementById("picturesModal");
  const galleryImage = document.getElementById("galleryImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const closeGalleryBtn = document.getElementById("closeGalleryBtn");

  const eventImages = [
    "./images/1.1.jpg",
    "./images/1.2.jpg",
    "./images/1.3.jpg",
    "./images/1.5.jpg",
    "./images/1.4.jpg",
    "./images/1.jpg"
  ];

  let currentImageIndex = 0;
  let autoSlideInterval;

  function updateGalleryImage(index) {
    if (galleryImage) {
      galleryImage.src = eventImages[index];
    }
  }

  function startAutoSlide() {
    return setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % eventImages.length;
      updateGalleryImage(currentImageIndex);
    }, 4000);
  }

  if (eventPicturesBtn) {
    eventPicturesBtn.addEventListener("click", () => {
      picturesModal.style.display = "flex";
      currentImageIndex = 0;
      updateGalleryImage(currentImageIndex);
      autoSlideInterval = startAutoSlide();
    });
  }

  if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener("click", () => {
      picturesModal.style.display = "none";
      clearInterval(autoSlideInterval);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      currentImageIndex =
        (currentImageIndex - 1 + eventImages.length) % eventImages.length;
      updateGalleryImage(currentImageIndex);
      autoSlideInterval = startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      currentImageIndex =
        (currentImageIndex + 1) % eventImages.length;
      updateGalleryImage(currentImageIndex);
      autoSlideInterval = startAutoSlide();
    });
  }

  if (picturesModal) {
    picturesModal.addEventListener("click", (e) => {
      if (e.target === picturesModal) {
        picturesModal.style.display = "none";
        clearInterval(autoSlideInterval);
      }
    });
  }

  // ================= COORDINATORS =================
  const coordinatorsBtn = document.querySelector(".coordinators-btn");
  const coordinatorsModal = document.getElementById("coordinatorsModal");
  const closeCoordinatorsBtn = document.querySelector(".close-coordinators");

  if (coordinatorsBtn) {
    coordinatorsBtn.addEventListener("click", () => {
      coordinatorsModal.style.display = "flex";
    });
  }

  if (closeCoordinatorsBtn) {
    closeCoordinatorsBtn.addEventListener("click", () => {
      coordinatorsModal.style.display = "none";
    });
  }

  if (coordinatorsModal) {
    coordinatorsModal.addEventListener("click", (e) => {
      if (e.target === coordinatorsModal) {
        coordinatorsModal.style.display = "none";
      }
    });
  }

  // ================= LOGOUT =================
  const logoutButton = document.querySelector(".userinfo");

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.clear();
      alert("Logged out successfully");
      window.location.href = "index.html"; // change if needed
    });
  }

});
