public class Attendance {

    private String studentId;
    private String studentName;
    private String department;
    private String activity;
    private String attendance;

    public Attendance(
        String studentId,
        String studentName,
        String department,
        String activity,
        String attendance
    ) {

        this.studentId = studentId;
        this.studentName = studentName;
        this.department = department;
        this.activity = activity;
        this.attendance = attendance;
    }

    public String getStudentId() {
        return studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public String getDepartment() {
        return department;
    }

    public String getActivity() {
        return activity;
    }

    public String getAttendance() {
        return attendance;
    }

    public void display() {

        System.out.println(
            studentId + " " +
            studentName + " " +
            department + " " +
            activity + " " +
            attendance
        );
    }
}
