function searchStudent() {

    let input =
        document.getElementById("searchInput")
        .value.toLowerCase();

    let table =
        document.getElementById("studentTable");

    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        let data = rows[i].innerText.toLowerCase();

        if (data.includes(input)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";
        }
    }
}
