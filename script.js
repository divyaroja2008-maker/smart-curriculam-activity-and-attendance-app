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
        ).value.trim();

    let department =
        document.getElementById(
            "department"
        ).value.trim();

    if (
        name === ""
        ||
        department === ""
    ) {

        alert(
            "Please fill all fields"
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

    clearInputs();
}

function displayStudents(filtered = students) {

    let table =
        document.getElementById(
            "studentTable"
        );

    table.innerHTML = "";

    let presentCount = 0;

    let absentCount = 0;

    filtered.forEach((student, index) => {

        let colorClass = "";

        if (
            student.attendance === "Present"
        ) {

            colorClass = "present";

            presentCount++;
        }

        if (
            student.attendance === "Absent"
        ) {

            colorClass = "absent";

            absentCount++;
        }

        table.innerHTML += `

        <tr>

            <td>${student.name}</td>

            <td>${student.department}</td>

            <td class="${colorClass}">
                ${student.attendance}
            </td>

            <td>

                <button onclick="markPresent(${index})">

                    Present

                </button>

                <button onclick="markAbsent(${index})">

                    Absent

                </button>

                <button onclick="editStudent(${index})">

                    Edit

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

    let percentage = 0;

    if (
        students.length > 0
    ) {

        percentage =
            (
                presentCount /
                students.length
            ) * 100;
    }

    document.getElementById(
        "percentage"
    ).innerHTML =
        "Attendance %: "
        + percentage.toFixed(2)
        + "%";
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

    let confirmDelete =
        confirm(
            "Delete this student?"
        );

    if (confirmDelete) {

        students.splice(index, 1);

        saveData();

        displayStudents();
    }
}

function editStudent(index) {

    let newName =
        prompt(
            "Enter New Name",
            students[index].name
        );

    let newDepartment =
        prompt(
            "Enter New Department",
            students[index].department
        );

    if (
        newName !== null
        &&
        newDepartment !== null
    ) {

        students[index].name =
            newName;

        students[index].department =
            newDepartment;

        saveData();

        displayStudents();
    }
}

function searchStudent() {

    let value =
        document.getElementById(
            "search"
        ).value.toLowerCase();

    let filteredStudents =
        students.filter(

            (student) =>

                student.name
                .toLowerCase()
                .includes(value)

                ||

                student.department
                .toLowerCase()
                .includes(value)
        );

    displayStudents(
        filteredStudents
    );
}

function clearInputs() {

    document.getElementById(
        "studentName"
    ).value = "";

    document.getElementById(
        "department"
    ).value = "";
}

function clearAllStudents() {

    let confirmClear =
        confirm(
            "Delete all students?"
        );

    if (confirmClear) {

        students = [];

        saveData();

        displayStudents();
    }
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

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );
}

    
