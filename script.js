let timetable =
JSON.parse(
localStorage.getItem(
"timetable"
)
) || [];

displayTimetable();

function addTimetable(){

let teacher =
document.getElementById(
"teacherName"
).value;

let subject =
document.getElementById(
"subjectName"
).value;

let room =
document.getElementById(
"classRoom"
).value;

let day =
document.getElementById(
"day"
).value;

let time =
document.getElementById(
"timeSlot"
).value;

if(
teacher === ""
||
subject === ""
||
room === ""
){

alert(
"Please Fill All Fields"
);

return;

}

timetable.push({

teacher:teacher,
subject:subject,
room:room,
day:day,
time:time

});

saveTimetable();

displayTimetable();

}

function displayTimetable(){

let table =
document.getElementById(
"timetableTable"
);

table.innerHTML = "";

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

saveTimetable();

displayTimetable();

}

function saveTimetable(){

localStorage.setItem(

"timetable",

JSON.stringify(timetable)

);

}
