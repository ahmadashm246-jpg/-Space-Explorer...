console.log("Space Explorer Ready");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let message = document.getElementById("message");
let userList = document.getElementById("userList");
submitButton.addEventListener("click", function() {
  let userName = nameInput.value;
  let userEmail = emailInput.value;
  if (userName == "" || userEmail == "") {
    message.textContent = "Please Enter Name and Email";
    return;
  }
  message.textContent = "Welcome " + userName;
  let listItem = document.createElement("li");
  listItem.textContent = userName + " - " + userEmail;
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  listItem.appendChild(deleteButton);
  deleteButton.addEventListener("click", function() {
    listItem.remove();  
    message.textContent = "";
  });
  userList.appendChild(listItem);
  nameInput.value = "";
  emailInput.value = "";
});
  


