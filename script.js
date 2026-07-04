// =========================
// LOCAL STORAGE
// =========================

let students =
JSON.parse(localStorage.getItem("students"))
|| [];

let timetable =
JSON.parse(localStorage.getItem("timetable"))
|| [];

let announcements =
JSON.parse(localStorage.getItem("announcements"))
|| [];

// =========================
// INITIAL LOAD
// =========================

displayStudents();
displayTimetable();
displayAnnouncements();
updateLeaderboard();
updateRewards();

// =========================
// ADD STUDENT
// =========================

function addStudent(){

let name =
document.getElementById("studentName").value;

let department =
document.getElementById("department").value;

let id =
document.getElementById("studentId").value;

let email =
document.getElementById("email").value;

let semester =
document.getElementById("semester").value;

let activity =
document.getElementById("activity").value;

let remarks =
document.getElementById("remarks").value;

let file =
document.getElementById("photo").files[0];

if(
name === "" ||
department === "" ||
id === "" ||
email === "" ||
activity === "" ||
remarks === "" ||
!file
){
alert("Please Fill All Fields");
return;
}

let reader =
new FileReader();

reader.onload =
function(e){

students.push({

name:name,
department:department,
id:id,
email:email,
semester:semester,
activity:activity,
remarks:remarks,
photo:e.target.result,
attendance:"Pending"

});

saveStudents();
displayStudents();
updateLeaderboard();
updateRewards();

clearInputs();

};

reader.readAsDataURL(file);

}

// =========================
// CLEAR INPUTS
// =========================

function clearInputs(){

document.getElementById("studentName").value="";
document.getElementById("department").value="";
document.getElementById("studentId").value="";
document.getElementById("email").value="";
document.getElementById("activity").value="";
document.getElementById("remarks").value="";
document.getElementById("photo").value="";

}

// =========================
// DISPLAY STUDENTS
// =========================

function displayStudents(filtered = students){

let table =
document.getElementById("studentTable");

table.innerHTML = "";

let present = 0;
let absent = 0;

filtered.forEach((student,index)=>{

let color = "pending";

if(student.attendance==="Present"){
color="present";
present++;
}

if(student.attendance==="Absent"){
color="absent";
absent++;
}

table.innerHTML += `

<tr>

<td>
<img src="${student.photo}"
width="50"
height="50">
</td>

<td>${student.name}</td>

<td>${student.department}</td>

<td>${student.id}</td>

<td>${student.email}</td>

<td>${student.semester}</td>

<td>${student.activity}</td>

<td>${student.remarks}</td>

<td class="${color}">
${student.attendance}
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

<button onclick="sendMail('${student.email}')">
Mail
</button>

</td>

</tr>

`;

});

document.getElementById("totalStudents").innerHTML =
students.length;

document.getElementById("presentStudents").innerHTML =
present;

document.getElementById("absentStudents").innerHTML =
absent;

let percent = 0;

if(students.length > 0){

percent =
(present/students.length)*100;

}

document.getElementById("attendancePercent").innerHTML =
percent.toFixed(0)+"%";

document.getElementById("progressBar").style.width =
percent+"%";

document.getElementById("progressBar").innerHTML =
percent.toFixed(0)+"%";

updateChart(present,absent);

}

// =========================
// ATTENDANCE FUNCTIONS
// =========================

function markPresent(index){

students[index].attendance="Present";

saveStudents();

displayStudents();

updateLeaderboard();

updateRewards();

}

function markAbsent(index){

students[index].attendance="Absent";

saveStudents();

displayStudents();

updateLeaderboard();

updateRewards();

}

// =========================
// DELETE STUDENT
// =========================

function deleteStudent(index){

students.splice(index,1);

saveStudents();

displayStudents();

updateLeaderboard();

updateRewards();

}

// =========================
// SAVE STUDENTS
// =========================

function saveStudents(){

localStorage.setItem(
"students",
JSON.stringify(students)
);

}

// =========================
// SEARCH STUDENT
// =========================

function searchStudent(){

let value =
document.getElementById("search")
.value.toLowerCase();

let filtered =
students.filter((student)=>

student.name.toLowerCase().includes(value)

||

student.department.toLowerCase().includes(value)

||

student.id.toLowerCase().includes(value)

);

displayStudents(filtered);

}

// =========================
// MAIL FUNCTION
// =========================

function sendMail(email){

window.location.href =
"mailto:"+email;

}

// =========================
// EXPORT CSV
// =========================

function exportCSV(){

let csv =
"Name,Department,Attendance\n";

students.forEach((student)=>{

csv +=
student.name + "," +
student.department + "," +
student.attendance + "\n";

});

let blob =
new Blob([csv],{
type:"text/csv"
});

let url =
window.URL.createObjectURL(blob);

let a =
document.createElement("a");

a.href = url;

a.download =
"attendance.csv";

a.click();

}

// =========================
// DARK MODE
// =========================

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}

// =========================
// DATE & TIME
// =========================

function updateDateTime(){

document.getElementById("dateTime")
.innerHTML =
new Date().toLocaleString();

}

setInterval(updateDateTime,1000);

updateDateTime();

// =========================
// ATTENDANCE CHART
// =========================

let chart;

function updateChart(present,absent){

let ctx =
document.getElementById("attendanceChart");

if(chart){
chart.destroy();
}

chart =
new Chart(ctx,{

type:"pie",

data:{

labels:[
"Present",
"Absent"
],

datasets:[{

data:[
present,
absent
],

backgroundColor:[
"green",
"red"
]

}]

}

});

}

// =========================
// TIMETABLE GENERATOR
// =========================

function addTimetable(){

let teacher =
document.getElementById("teacherName").value;

let subject =
document.getElementById("subjectName").value;

let room =
document.getElementById("classRoom").value;

let day =
document.getElementById("day").value;

let time =
document.getElementById("timeSlot").value;

if(
teacher==="" ||
subject==="" ||
room===""
){
alert("Fill All Fields");
return;
}

timetable.push({

teacher,
subject,
room,
day,
time

});

localStorage.setItem(
"timetable",
JSON.stringify(timetable)
);

displayTimetable();

}

function displayTimetable(){

let table =
document.getElementById("timetableTable");

table.innerHTML="";

timetable.forEach((item,index)=>{

table.innerHTML += `

<tr>

<td>${item.teacher}</td>
<td>${item.subject}</td>
<td>${item.room}</td>
<td>${item.day}</td>
<td>${item.time}</td>

<td>

<button onclick="deleteTimetable(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function deleteTimetable(index){

timetable.splice(index,1);

localStorage.setItem(
"timetable",
JSON.stringify(timetable)
);

displayTimetable();

}

// =========================
// AI PREDICTION
// =========================

function predictAttendance(){

let present =
students.filter(
s => s.attendance==="Present"
).length;

let absent =
students.filter(
s => s.attendance==="Absent"
).length;

if(present > absent){

document.getElementById("aiPrediction")
.innerHTML =
"AI Prediction: Attendance performance is GOOD";

}

else{

document.getElementById("aiPrediction")
.innerHTML =
"AI Prediction: Attendance performance needs improvement";

}

}

// =========================
// QR CODE
// =========================

function generateQR(){

let student =
document.getElementById("qrStudent").value;

document.getElementById("qrResult").innerHTML =

`
<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${student}">
`;

}

// =========================
// ANNOUNCEMENTS
// =========================

function addAnnouncement(){

let text =
document.getElementById("announcementInput").value;

if(text===""){
alert("Enter Announcement");
return;
}

announcements.push(text);

localStorage.setItem(
"announcements",
JSON.stringify(announcements)
);

displayAnnouncements();

document.getElementById("announcementInput").value="";

}

function displayAnnouncements(){

let list =
document.getElementById("announcementList");

list.innerHTML="";

announcements.forEach((item)=>{

list.innerHTML +=
`<li>${item}</li>`;

});

}

// =========================
// LEADERBOARD
// =========================

function updateLeaderboard(){

let board =
document.getElementById("leaderboard");

board.innerHTML="";

students.forEach((student)=>{

if(student.attendance==="Present"){

board.innerHTML +=
`<li>🏆 ${student.name}</li>`;

}

});

}

// =========================
// REWARD SYSTEM
// =========================

function updateRewards(){

let table =
document.getElementById("rewardTable");

table.innerHTML = "";

students.forEach((student)=>{

let reward =
"Needs Improvement";

if(student.attendance==="Present"){

reward =
"🏆 Attendance Champion";

}

if(student.attendance==="Pending"){

reward =
"⏳ Waiting";

}

if(student.attendance==="Absent"){

reward =
"⚠ Attendance Low";

}

table.innerHTML += `

<tr>

<td>${student.name}</td>

<td>${student.attendance}</td>

<td>${reward}</td>

</tr>

`;

});

}
