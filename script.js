let total = 0;
let presentCount = 0;
let absentCount = 0;

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
    "<strong>" + student + "</strong>" +
    " - " + status +
    " - " + activity +
    " - " + time +
    ' <button onclick="deleteItem(this, \'' + status + '\')">❌</button>';

  if(status === "Present") {
    item.style.borderLeft = "5px solid green";
    presentCount++;
  }

  else {
    item.style.borderLeft = "5px solid red";
    absentCount++;
  }

  list.appendChild(item);

  total++;

  updateStatistics();

  document.getElementById("studentName").value = "";
}

function deleteItem(button, status) {

  button.parentElement.remove();

  total--;

  if(status === "Present") {
    presentCount--;
  }

  else {
    absentCount--;
  }

  updateStatistics();
}

function updateStatistics() {

  document.getElementById("totalStudents").innerText =
    "Total Students: " + total;

  let percentage = 0;

  if(total > 0) {
    percentage =
      (presentCount / total) * 100;
  }

  document.getElementById("attendancePercentage").innerText =
    "Attendance Percentage: " +
    percentage.toFixed(0) + "%";
}

function searchStudent() {

  let input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  let items =
    document.getElementsByTagName("li");

  for(let i = 0; i < items.length; i++) {

    let text =
      items[i].innerText.toLowerCase();

    if(text.includes(input)) {
      items[i].style.display = "";
    }

    else {
      items[i].style.display = "none";
    }
  }
}

function toggleDarkMode() {

  document.body.classList.toggle("dark");
}

function downloadReport() {

  let items =
    document.getElementsByTagName("li");

  let report = "";

  for(let i = 0; i < items.length; i++) {

    report += items[i].innerText + "\n";
  }

  let blob =
    new Blob([report],
    { type: "text/plain" });

  let link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  link.download =
    "attendance-report.txt";

  link.click();
}
      
