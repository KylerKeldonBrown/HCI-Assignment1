// Custom JS logic (Mavo is handling most calculations automatically)
document.addEventListener("mv-load", () => {
  const app = Mavo.all.gradeCalc;

  // Watch finalGrade property to update letter grade
  app.observe("finalGrade", value => {
    let grade = parseFloat(value) || 0;
    let letter = "F";
    if (grade >= 90) letter = "A";
    else if (grade >= 80) letter = "B";
    else if (grade >= 70) letter = "C";
    else if (grade >= 60) letter = "D";
    app.set("letter", letter);
  });
});
