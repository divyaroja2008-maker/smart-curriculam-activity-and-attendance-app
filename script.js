let students = [];

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

    displayStudents();

    document.getElementById("studentForm").reset();
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((s) => {

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
        </tr>
        `;
    });
}
