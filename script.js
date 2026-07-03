let students = [];

function addAttendance(status) {
    let name = document.getElementById("studentName").value;
    let activity = document.getElementById("activity").value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    let now = new Date();

    let student = {
        name: name,
        activity: activity,
        status: status,
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString()
    };

    students.push(student);

    displayStudents();

    document.getElementById("studentName").value = "";
}

function displayStudents() {
    let attendanceList = document.getElementById("attendanceList");

    attendanceList.innerHTML = "";

    let presentCount = 0;

    students.forEach((student, index) => {

        if (student.status === "Present") {
            presentCount++;
        }

        attendanceList.innerHTML += `
            <li>
                <b>${student.name}</b> |
                ${student.activity} |
                ${student.status} |
                ${student.date} |
                ${student.time}

                <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </li>
        `;
    });

    document.getElementById("totalStudents").innerText =
        "Total Students: " + students.length;

    let percentage = 0;

    if (students.length > 0) {
        percentage =
            (presentCount / students.length) * 100;
    }

    document.getElementById("attendancePercentage").innerText =
        "Attendance Percentage: " +
        percentage.toFixed(0) + "%";
}

function deleteStudent(index) {
    students.splice(index, 1);

    displayStudents();
}

function searchStudent() {
    let input =
        document.getElementById("searchBox").value.toLowerCase();

    let attendanceList =
        document.getElementById("attendanceList");

    attendanceList.innerHTML = "";

    students.forEach((student, index) => {

        if (
            student.name.toLowerCase().includes(input)
        ) {

            attendanceList.innerHTML += `
                <li>
                    <b>${student.name}</b> |
                    ${student.activity} |
                    ${student.status} |
                    ${student.date} |
                    ${student.time}

                    <button onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </li>
            `;
        }
    });
}

function downloadReport() {

    let text = "SMART ATTENDANCE REPORT\n\n";

    students.forEach((student) => {

        text +=
            "Name: " + student.name +
            " | Activity: " + student.activity +
            " | Status: " + student.status +
            " | Date: " + student.date +
            " | Time: " + student.time +
            "\n";
    });

    let blob = new Blob([text], {
        type: "text/plain"
    });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "attendance_report.txt";

    link.click();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
