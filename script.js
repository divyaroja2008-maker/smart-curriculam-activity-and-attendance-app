if (
    localStorage.getItem("login")
    !== "true"
) {

    window.location.href =
        "login.html";
}

let students = [];

function addStudent() {

    let name =
        document.getElementById(
            "studentName"
        ).value;

    let department =
        document.getElementById(
            "department"
        ).value;

    students.push({

        name: name,

        department: department,

        attendance: "Not Marked"
    });

    displayStudents();
}

function displayStudents() {

    let table =
        document.getElementById(
            "studentTable"
        );

    table.innerHTML = "";

    students.forEach((s, index) => {

        table.innerHTML += `

        <tr>

            <td>${s.name}</td>

            <td>${s.department}</td>

            <td>${s.attendance}</td>

            <td>

                <button onclick="markPresent(${index})">

                    Present

                </button>

                <button onclick="markAbsent(${index})">

                    Absent

                </button>

            </td>

        </tr>
        `;
    });
}

function markPresent(index) {

    students[index].attendance =
        "Present";

    displayStudents();
}

function markAbsent(index) {

    students[index].attendance =
        "Absent";

    displayStudents();
}

function logout() {

    localStorage.removeItem(
        "login"
    );

    window.location.href =
        "login.html";
}
