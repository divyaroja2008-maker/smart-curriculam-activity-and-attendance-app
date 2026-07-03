      if (
    localStorage.getItem("login")
    !== "true"
) {

    window.location.href =
        "login.html";
}

let students =
    JSON.parse(
        localStorage.getItem(
            "students"
        )
    ) || [];

displayStudents();

function addStudent() {

    let name =
        document.getElementById(
            "studentName"
        ).value;

    let department =
        document.getElementById(
            "department"
        ).value;

    if (
        name === ""
        ||
        department === ""
    ) {

        alert(
            "Fill all fields"
        );

        return;
    }

    students.push({

        name: name,

        department: department,

        attendance: "Not Marked"
    });

    saveData();

    displayStudents();

    document.getElementById(
        "studentName"
    ).value = "";

    document.getElementById(
        "department"
    ).value = "";
}

function displayStudents(filtered = students) {

    let table =
        document.getElementById(
            "studentTable"
        );

    table.innerHTML = "";

    let presentCount = 0;

    let absentCount = 0;

    filtered.forEach((s, index) => {

        if (
            s.attendance === "Present"
        ) {

            presentCount++;
        }

        if (
            s.attendance === "Absent"
        ) {

            absentCount++;
        }

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

                <button onclick="deleteStudent(${index})">

                    Delete

                </button>

            </td>

        </tr>
        `;
    });

    document.getElementById(
        "total"
    ).innerHTML =
        "Total Students: "
        + students.length;

    document.getElementById(
        "present"
    ).innerHTML =
        "Present: "
        + presentCount;

    document.getElementById(
        "absent"
    ).innerHTML =
        "Absent: "
        + absentCount;
}

function markPresent(index) {

    students[index].attendance =
        "Present";

    saveData();

    displayStudents();
}

function markAbsent(index) {

    students[index].attendance =
        "Absent";

    saveData();

    displayStudents();
}

function deleteStudent(index) {

    students.splice(index, 1);

    saveData();

    displayStudents();
}

function saveData() {

    localStorage.setItem(

        "students",

        JSON.stringify(students)
    );
}

function logout() {

    localStorage.removeItem(
        "login"
    );

    window.location.href =
        "login.html";
}

function searchStudent() {

    let value =
        document.getElementById(
            "search"
        ).value.toLowerCase();

    let filtered =
        students.filter((s) =>

            s.name.toLowerCase()
            .includes(value)
        );

    displayStudents(filtered);
}
