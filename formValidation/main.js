const sampleForm = document.querySelector("#sample-form");
const sampleDialog = document.querySelector("#sample-dialog");

sampleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(sampleForm);
  const entries = Object.fromEntries(formData.entries());
  const renderedHTML = Object.entries(entries)
    .map((e) => {
      const [key, val] = e;
      return `<li><strong>${key}: </strong>${val}</li>`;
    })
    .join("");
  sampleDialog.innerHTML = `<h2>Form Data</h2><ul>${renderedHTML}</ul><button type="button" onClick="this.parentElement.close()")">Close</button>`;
  sampleDialog.showModal();
});
