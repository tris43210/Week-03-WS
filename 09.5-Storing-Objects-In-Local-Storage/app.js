console.log(`checkkk`);

const form = document.getElementById(`my-form`);
console.log(form);

// Creating a FormData Object and have it store colour input in local storage

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get(`colour`);

  // preferences is now an object, it might contain other preferences.

  const preferences = {
    colour,
  };
  // local storage can only contain strings so we need to convert it...

  localStorage.setItem(`preferences`, JSON.stringify(preferences));
}

form.addEventListener(`submit`, savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));
