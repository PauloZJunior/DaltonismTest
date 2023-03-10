function applyColorFilter() {
  const img = document.getElementById("original");
  const select = document.getElementById("daltonismoSelect");
  const filteredImg = document.getElementById("filtered");
  
  const filter = select.value;
  switch(filter) {
    case "normal":
      filteredImg.src = img.src;
      break;
    case "protanopia":
      filteredImg.src = "images/protanopia.png";
      break;
    case "deuteranopia":
      filteredImg.src = "images/deuteranopia.png";
      break;
    case "tritanopia":
      filteredImg.src = "images/tritanopia.png";
      break;
    case "acromatopsia":
      filteredImg.src = "images/acromatopsia.png";
      break;
    default:
      filteredImg.src = img.src;
  }
}
