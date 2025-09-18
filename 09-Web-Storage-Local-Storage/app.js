console.log(`hello Worlddd`);

const form = document.getElementById(`my-form`);

// Creating a FormData Object and have it store colour input in local storage

form.addEventListener(`submit`, function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get(`colour`);

  localStorage.setItem("colour", colour);
});

// Retieving colours from local storage:

const colour = localStorage.getItem(`colour`);

if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}
