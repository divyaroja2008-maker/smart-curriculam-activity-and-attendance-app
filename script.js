let total = 0;

function markAttendance(status) {

  let student =
    document.getElementById("studentName").value;

  if(student === "") {
    alert("Enter student name");
    return;
  }

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

  total++;

  document.getElementById("count").innerText = total;

  document.getElementById("studentName").value = "";
}
