let mathTotal = 0;
let englishTotal = 0;
let totalRows = 0;

function submitGrades() {
    const mathGrade = document.getElementById("mathGrade").value;
    const englishGrade = document.getElementById("englishGrade").value;

    if (isNaN(mathGrade) || isNaN(englishGrade) || mathGrade < 0 || mathGrade > 100 || englishGrade < 0 || englishGrade > 100) {
        alert("Please enter valid grades between 0 and 100.");
        return;
    }

    const tableBody = document.getElementById("gradesTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const mathCell = newRow.insertCell(0);
    mathCell.textContent = mathGrade;

    const englishCell = newRow.insertCell(1);
    englishCell.textContent = englishGrade;

    const averageCell = newRow.insertCell(2);
    const average = (parseFloat(mathGrade) + parseFloat(englishGrade)) / 2;
    averageCell.textContent = average.toFixed(2);

    mathTotal += parseFloat(mathGrade);
    englishTotal += parseFloat(englishGrade);
    totalRows++;

    updateAverages();
    }

    function updateAverages() {
    const mathAvg = mathTotal / totalRows;
    const englishAvg = englishTotal / totalRows;
    const overallAvg = (mathTotal + englishTotal) / (2 * totalRows);

    document.getElementById("mathAverage").textContent = `Math Average: ${mathAvg.toFixed(2)}`;
    document.getElementById("englishAverage").textContent = `English Average: ${englishAvg.toFixed(2)}`;
    document.getElementById("overallAverage").textContent = `Overall Average: ${overallAvg.toFixed(2)}`;
}