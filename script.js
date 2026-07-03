let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent() {

    const student = {
        id: document.getElementById("studentId").value,
        name: document.getElementById("studentName").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value,
        section: document.getElementById("section").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        activity: document.getElementById("activity").value
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("studentForm").reset();
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((s, index) => {

        table.innerHTML += `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.department}</td>
            <td>${s.year}</td>
            <td>${s.section}</td>
            <td>${s.email}</td>
            <td>${s.phone}</td>
            <td>${s.activity}</td>

            <td>
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
}

function deleteStudent(index) {

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function editStudent(index) {

    document.getElementById("studentId").value =
        students[index].id;

    document.getElementById("studentName").value =
        students[index].name;

    document.getElementById("department").value =
        students[index].department;

    document.getElementById("year").value =
        students[index].year;

    document.getElementById("section").value =
        students[index].section;

    document.getElementById("email").value =
        students[index].email;

    document.getElementById("phone").value =
        students[index].phone;

    document.getElementById("activity").value =
        students[index].activity;

    deleteStudent(index);
}
