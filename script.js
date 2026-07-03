let students = [];

// ADD STUDENT
function addStudent() {
  let name = document.getElementById("studentName").value;

  if (name === "") {
    alert("Enter student name");
    return;
  }

  students.push({
    name: name,
    attendance: "Not Marked"
  });

  document.getElementById("studentName").value = "";
  displayStudents();
}

// DISPLAY STUDENTS
function displayStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    list.innerHTML += `
      <div class="student-card">
        <h3>${student.name}</h3>
        <p>Attendance: ${student.attendance}</p>

        <button onclick="markPresent(${index})">Present</button>
        <button onclick="markAbsent(${index})">Absent</button>
      </div>
    `;
  });
}

// MARK PRESENT
function markPresent(index) {
  students[index].attendance = "Present";
  displayStudents();
}

// MARK ABSENT
function markAbsent(index) {
  students[index].attendance = "Absent";
  displayStudents();
}

// SEARCH STUDENT
function searchStudent() {
  let value = document.getElementById("searchBox").value.toLowerCase();

  let filtered = students.filter(s =>
    s.name.toLowerCase().includes(value)
  );

  let list = document.getElementById("studentList");
  list.innerHTML = "";

  filtered.forEach((student, index) => {
    list.innerHTML += `
      <div class="student-card">
        <h3>${student.name}</h3>
        <p>Attendance: ${student.attendance}</p>
      </div>
    `;
  });
}
