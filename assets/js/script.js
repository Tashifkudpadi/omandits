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

const openDelegateBtns = document.querySelectorAll(".openDelegateBtn");
const delegateFormContainer = document.getElementById("delegateFormContainer");
const closeDelegateBtn = document.getElementById("closeDelegateBtn");

openDelegateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    delegateFormContainer.style.display = "block";
  });
});

closeDelegateBtn.addEventListener("click", () => {
  delegateFormContainer.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === delegateFormContainer) {
    delegateFormContainer.style.display = "none";
  }
});

const openSponsorBtns = document.querySelectorAll(".openSponsorBtn");
const sponsorFormContainer = document.getElementById("sponsorFormContainer");
const closeSponsorBtn = document.getElementById("closeSponsorBtn");

openSponsorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sponsorFormContainer.style.display = "block";
  });
});

closeSponsorBtn.addEventListener("click", () => {
  sponsorFormContainer.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === sponsorFormContainer) {
    sponsorFormContainer.style.display = "none";
  }
});

function sendMail() {

  const registrationCode = document.getElementById("registrationCode").value;
  const title = document.getElementById("title").value;
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const jobtitle = document.getElementById("jobtitle").value;
  const companyname = document.getElementById("companyname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("mobilePhone").value;
  const industry = document.getElementById("industry").value;
  const country = document.getElementById("country").value;
  const employees = document.getElementById("employees").value;
  const solutions = document.getElementById("solutions").value;
  const role = document.getElementById("role").value;

  const checkbox1 = document.getElementById("my_checkbox1");
  const checkbox2 = document.getElementById("my_checkbox2");
  const checkbox3 = document.getElementById("my_checkbox3");
  const checkbox4 = document.getElementById("my_checkbox4");

  if (
    !registrationCode ||
    !title ||
    !firstname ||
    !lastname || jobtitle || companyname || email || phone || industry || country || employees || solutions || role
    // ... Add conditions for other required fields here ...
  ) {
    alert("Please fill in all required fields.");
    return; // Exit the function early if any field is empty
  }

  if (checkbox1.checked || checkbox4.checked) {
    alert('You must select the required checkbox.');
    return;
  }

  // Get the checkbox state message based on whether it's checked or not
  const checkboxState1 = checkbox1.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";
  const checkboxState2 = checkbox2.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";
  const checkboxState3 = checkbox3.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";
  const checkboxState4 = checkbox4.checked
    ? "The checkbox is checked."
    : "The checkbox is not checked.";

  const params = {
    registrationCode,
    title,
    firstname,
    lastname,
    jobtitle,
    companyname,
    email,
    phone,
    industry,
    country,
    employees,
    solutions,
    role,

    referee_fullname,
    referee_companyname,
    referee_jobtitle,
    referee_emaili,
    referee_phoneno,

    checkboxState1,
    checkboxState2,
    checkboxState3,
    checkboxState4,
  };
  const serviceID = "service_xgm708t";
  const templateID = "template_ju5hv1k";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("registrationCode").value = "";
      document.getElementById("title").value = "";
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("jobtitle").value = "";
      document.getElementById("companyname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("mobilePhone").value = "";
      document.getElementById("industry").value = "";
      document.getElementById("country").value = "";
      document.getElementById("employees").value = "";
      document.getElementById("solutions").value = "";
      document.getElementById("role").value = "";

      document.getElementById("referee_fullname").value = "";
      document.getElementById("referee_companyname").value = "";
      document.getElementById("referee_jobtitle").value = "";
      document.getElementById("referee_emailid").value = "";
      document.getElementById("referee_phoneno").value = "";
      console.log(res);
      alert("Your message has sent succesfully");
    })
    .catch((error) => alert(error));
}