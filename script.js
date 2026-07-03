function markAttendance() {

  let student =
    document.getElementById("studentName").value;

  let list =
    document.getElementById("attendanceList");

  let item =
    document.createElement("li");

  item.innerText =
    student + " - Present";

  list.appendChild(item);
}
