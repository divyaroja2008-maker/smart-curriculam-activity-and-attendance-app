let attendance = [];

function markAttendance(status) {

    const name = document.getElementById("studentName").value;
    const activity = document.getElementById("activity").value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    attendance.push({
        name: name,
        activity: activity,
        status: status
    });

    updateDashboard();
    displayAttendance();

    document.getElementById("studentName").value = "";
}

function updateDashboard() {

    let total = attendance.length;
    let present = attendance.filter(a => a.status === "Present").length;
    let absent = attendance.filter(a => a.status === "Absent").length;
    let percentage = total === 0 ? 0 : ((present / total) * 100).toFixed(2);

    document.getElementById("totalStudents").innerHTML = total;
    document.getElementById("presentCount").innerHTML = present;
    document.getElementById("absentCount").innerHTML = absent;
    document.getElementById("attendancePercent").innerHTML = percentage + "%";
}

function displayAttendance() {

    let table = document.getElementById("attendanceTable");

    table.innerHTML = "";

    attendance.forEach((student) => {

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.activity}</td>
            <td>${student.status}</td>
        </tr>`;
    });
}
<input type="text" id="studentName" placeholder="Enter Student Name">

<select id="activity">
    <option>Sports</option>
    <option>NSS</option>
    <option>NCC</option>
    <option>Yoga</option>
</select>

<button onclick="markAttendance('Present')">Present</button>
<button
