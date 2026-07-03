let total = 0;

function markAttendance(status) {

  let student =
    document.getElementById("studentName").value;

  let activity =
    document.getElementById("activity").value;

  if(student === "") {
    alert("Enter student name");
    return;
  }

  let list =
    document.getElementById("attendanceList");

  let item =
    document.createElement("li");

  let time =
    new Date().toLocaleString();

  item.innerHTML =
    student +
    " - " +
    status +
    " - " +
    activity +
    " - " +
    time +
    ' <button onclick="deleteItem(this)">❌</button>';

  if(status === "Present") {
    item.style.color = "green";
  }

  else {
    item.style.color = "red";
  }

  list.appendChild(item);

  total++;

  document.getElementById("count").innerText = total;

  document.getElementById("studentName").value = "";
}

function deleteItem(button) {

  button.parentElement.remove();

  total--;

  document.getElementById("count").innerText = total;
}
