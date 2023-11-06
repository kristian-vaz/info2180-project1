/* Add your JavaScript to this file */
window.addEventListener("load", (event) => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (isValid(email)) {
      document.querySelector(
        ".message"
      ).textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    } else {
      document.querySelector(".message").textContent =
        "Please enter a valid email address.";
    }
    document.getElementById("email").value = "";
  });

  function isValid(email) {
    if (email !== "") {
      return true;
    }
    return false;
  }
});
