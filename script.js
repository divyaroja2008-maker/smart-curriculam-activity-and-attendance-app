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

    document.getElementById(
        "studentName"
    ).value = "";

    document.getElementById(
        "department"
    ).value = "";
}

function displayStudents() {

    let table =
        document.getElementById(
            "studentTable"
        );

    table.innerHTML = "";

    students.forEach((s, index) => {

        let colorClass = "";

        if (
            s.attendance === "Present"
        ) {

            colorClass = "present";
        }

        if (
            s.attendance === "Absent"
        ) {

            colorClass = "absent";
        }

        table.innerHTML += `

        <tr>

            <td>${s.name}</td>

            <td>${s.department}</td>

            <td class="${colorClass}">
                ${s.attendance}
            </td>

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
   
