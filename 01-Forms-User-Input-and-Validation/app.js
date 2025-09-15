console.log(`hello`);
const form = document.getElementById(`form-wrapper`);

form.addEventListener(`submit`, function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  const jsObjectPlease = Object.fromEntries(formData);
  console.log(jsObjectPlease);
});
