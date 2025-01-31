document.getElementById("convert").addEventListener("click", () => {
  const degreefield = document.getElementById("degree");
  const degreefieldval = degreefield.value;
  if (!isNaN(degreefieldval)) {
    const criteriaselectorfield = document.getElementById("criteriaselector");
    const criteriaselectorfieldval = criteriaselectorfield.value;
    const resultfield = document.getElementById("result");
    let res;
    if (criteriaselectorfieldval === "Fahrenheit") {
      res = ((degreefieldval - 32) * 5) / 9;
      resultfield.value = `${res.toFixed(3)} Celcious`;
    } else if (criteriaselectorfieldval === "Celcious") {
      res = (9 * degreefieldval) / 5 + 32;
      resultfield.value = `${res.toFixed(3)} Fahrenheit`;
    }
  } else {
    alert("Please enter number in Degree field");
  }
});
