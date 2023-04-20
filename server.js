function colorMixer() {
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;
  const showColor = document.getElementById("showColor");
  let mixedColor;
  switch (color1) {
    case "yellow":
      switch (color2) {
        case "red":
          mixedColor = "orange";
          break;
        case "blue":
          mixedColor = "green";
          break;
        default:
          mixedColor="Invalid Color Combination";
      }
      break;
    case "red":
      switch (color2) {
        case "yellow":
          mixedColor = "orange";
          break;
        case "blue":
          mixedColor = "purple";
          break;
        default:
          mixedColor= "Invalid Color Combination";
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "green";
          break;
        default:
          mixedColor="Invalid Color Combination";
      }
      break;

    default:
      mixedColor="Invalid Color Combination";
      break;
  }
  if (mixedColor == "Invalid Color Combination") {
    showColor.style.backgroundColor = "white";
  } else {
    showColor.style.backgroundColor = mixedColor;
  }
}
