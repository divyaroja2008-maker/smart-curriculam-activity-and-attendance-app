function markAttendance(status) {

  let student =
    document.getElementById("studentName").value;

  let list =
    document.getElementById("attendanceList");

  let item =
    document.createElement("li");

  item.innerText =
    student + " - " + status;

  if(status === "Present") {
    item.style.color = "green";
  }

  else {
    item.style.color = "red";
  }

  list.appendChild(item);
}
