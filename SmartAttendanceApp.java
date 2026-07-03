import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.*;

public class SmartAttendanceApp extends JFrame {

    JTextField idField;
    JTextField nameField;
    JTextField deptField;

    JComboBox<String> activityBox;

    DefaultTableModel model;

    JTable table;

    JLabel totalLabel;
    JLabel presentLabel;
    JLabel absentLabel;

    int presentCount = 0;
    int absentCount = 0;

    public SmartAttendanceApp() {

        setTitle(
            "Smart Curriculum Activity and Attendance App"
        );

        setSize(1000, 600);

        setDefaultCloseOperation(
            JFrame.EXIT_ON_CLOSE
        );

        setLayout(new BorderLayout());

        JPanel topPanel =
            new JPanel();

        topPanel.setLayout(
            new GridLayout(6, 2, 10, 10)
        );

        topPanel.setBorder(
            BorderFactory.createTitledBorder(
                "Student Details"
            )
        );

        topPanel.add(
            new JLabel("Student ID")
        );

        idField =
            new JTextField();

        topPanel.add(idField);

        topPanel.add(
            new JLabel("Student Name")
        );

        nameField =
            new JTextField();

        topPanel.add(nameField);

        topPanel.add(
            new JLabel("Department")
        );

        deptField =
            new JTextField();

        topPanel.add(deptField);

        topPanel.add(
            new JLabel("Activity")
        );

        activityBox =
            new JComboBox<>(

                new String[] {

                    "Sports",
                    "NSS",
                    "NCC",
                    "Yoga",
                    "Cultural"
                }
            );

        topPanel.add(activityBox);

        JButton addButton =
            new JButton("Add Student");

        JButton presentButton =
            new JButton("Mark Present");

        JButton absentButton =
            new JButton("Mark Absent");

        JButton deleteButton =
            new JButton("Delete");

        topPanel.add(addButton);

        topPanel.add(presentButton);

        topPanel.add(absentButton);

        topPanel.add(deleteButton);

        add(topPanel, BorderLayout.NORTH);

        model =
            new DefaultTableModel();

        model.addColumn("ID");

        model.addColumn("Name");

        model.addColumn("Department");

        model.addColumn("Activity");

        model.addColumn("Attendance");

        table =
            new JTable(model);

        JScrollPane scrollPane =
            new JScrollPane(table);

        add(scrollPane, BorderLayout.CENTER);

        JPanel bottomPanel =
            new JPanel();

        totalLabel =
            new JLabel("Total Students: 0");

        presentLabel =
            new JLabel("Present: 0");

        absentLabel =
            new JLabel("Absent: 0");

        bottomPanel.add(totalLabel);

        bottomPanel.add(presentLabel);

        bottomPanel.add(absentLabel);

        add(bottomPanel, BorderLayout.SOUTH);

        addButton.addActionListener(

            new ActionListener() {

                public void actionPerformed(
                    ActionEvent e
                ) {

                    String id =
                        idField.getText();

                    String name =
                        nameField.getText();

                    String dept =
                        deptField.getText();

                    String activity =
                        activityBox
                        .getSelectedItem()
                        .toString();

                    model.addRow(

                        new Object[] {

                            id,
                            name,
                            dept,
                            activity,
                            "Not Marked"
                        }
                    );

                    updateTotal();

                    clearFields();
                }
            }
        );

        presentButton.addActionListener(

            new ActionListener() {

                public void actionPerformed(
                    ActionEvent e
                ) {

                    int row =
                        table.getSelectedRow();

                    if (row != -1) {

                        model.setValueAt(

                            "Present",

                            row,

                            4
                        );

                        presentCount++;

                        updateAttendance();
                    }
                }
            }
        );

        absentButton.addActionListener(

            new ActionListener() {

                public void actionPerformed(
                    ActionEvent e
                ) {

                    int row =
                        table.getSelectedRow();

                    if (row != -1) {

                        model.setValueAt(

                            "Absent",

                            row,

                            4
                        );

                        absentCount++;

                        updateAttendance();
                    }
                }
            }
        );

        deleteButton.addActionListener(

            new ActionListener() {

                public void actionPerformed(
                    ActionEvent e
                ) {

                    int row =
                        table.getSelectedRow();

                    if (row != -1) {

                        model.removeRow(row);

                        updateTotal();
                    }
                }
            }
        );

        setVisible(true);
    }

    void clearFields() {

        idField.setText("");

        nameField.setText("");

        deptField.setText("");
    }

    void updateTotal() {

        totalLabel.setText(

            "Total Students: "
            + model.getRowCount()
        );
    }

    void updateAttendance() {

        presentLabel.setText(

            "Present: "
            + presentCount
        );

        absentLabel.setText(

            "Absent: "
            + absentCount
        );
    }

    public static void main(String[] args) {

        new SmartAttendanceApp();
    }
}
