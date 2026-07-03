function downloadCSV() {

    let csv =
`ID,Name,Department,Activity,Attendance\n`;

    students.forEach((s) => {

        csv +=
`${s.id},
${s.name},
${s.department},
${s.activity},
${s.attendance}\n`;
    });

    let blob =
        new Blob([csv],
        { type: 'text/csv' });

    let url =
        window.URL.createObjectURL(blob);

    let a =
        document.createElement("a");

    a.href = url;

    a.download =
        "attendance_report.csv";

    a.click();
}
