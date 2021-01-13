document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const li = document.createElement("li");
      li.innerText = e.target["new-task-description"].value;
      document.getElementById("tasks").appendChild(li);
    });
});
