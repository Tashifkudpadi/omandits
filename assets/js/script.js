$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

// Target date
const targetDate = new Date("2024-03-06T00:00:00");

function updateTimer() {
  const currentDate = new Date();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining <= 0) {
    document.getElementById("timer").innerHTML = "Happy Valentine's Day!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `
    <div class="d-flex justify-content-center timer_container">
                    <p>${days} <br/> <span>DAYS</span></p>
                    <p>${hours}<br/> <span> HOURS</span></p>
                    <p>${minutes}<br/> <span>MINUTES</span></p>
                    <p>${seconds}<br/> <span> SECONDS</span></p>
                    </div>
                `;
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to update the timer
updateTimer();

//Get references to the button, popup container, and close button
const openPopupBtn = document.getElementById("openPopupBtn");
const popupContainer = document.getElementById("popupContainer");
const closePopupBtn = document.getElementById("closePopupBtn");

// Show the popup form when the button is clicked
openPopupBtn.addEventListener("click", () => {
  popupContainer.style.display = "block";
});

// Hide the popup form when the close button is clicked
closePopupBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

// Hide the popup form when the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});

// Prevent the form from submitting (you can add form submission logic here)
// const popupForm = document.getElementById("popupForm");
// popupForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // Add your form submission logic here
// });

// Get references to the button, popup container, and close button
// const openPopupBtn = document.getElementById("openPopupBtn");
// const popupContainer = document.getElementById("popupContainer");
// const closePopupBtn = document.getElementById("closePopupBtn");

// // Show the popup form when the button is clicked
// openPopupBtn.addEventListener("click", () => {
//   popupContainer.style.display = "block";
//   document.body.style.overflow = "hidden"; // Disable scrolling
// });

// // Hide the popup form when the close button is clicked
// closePopupBtn.addEventListener("click", () => {
//   popupContainer.style.display = "none";
//   document.body.style.overflow = "auto"; // Re-enable scrolling
// });

// // Hide the popup form when the user clicks outside of it
// window.addEventListener("click", (event) => {
//   if (event.target === popupContainer) {
//     popupContainer.style.display = "none";
//     document.body.style.overflow = "auto"; // Re-enable scrolling
//   }
// });

// // Prevent the form from submitting (you can add form submission logic here)
// const popupForm = document.getElementById("popupForm");
// popupForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // Add your form submission logic here
// });
