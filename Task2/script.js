function sendEmail() {
  const task = {
    task: document.getElementById('task').value,
    date: document.getElementById('date').value
  };

  emailjs.init("JE9JBE41m-Bdz1k4H"); 

  const emailParams = {
    task: "Sample Task",
    date: "2023-11-28",
    to_email: "example@gmail.com" 
  };

  emailjs.send("service_*****", "template_******", emailParams)
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!"); 
      },
      function (error) {
        console.log("Email sent successfully:", error); 
        alert("Email sent successfully!");
      }
    );

  document.getElementById('taskForm').reset();
}
function addTask() {
  const task = {
    task: document.getElementById('task').value,
    date: document.getElementById('date').value
  };

  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${task.task} - ${task.date}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(listItem);

  document.getElementById('taskForm').reset();
}

