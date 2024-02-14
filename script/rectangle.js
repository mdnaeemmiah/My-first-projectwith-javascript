function calculateRectangleArea(){
//    get length
  const lengthInput =document.getElementById('Rectangle-length')
  const lengthInputrect =lengthInput.value;
  const length =parseFloat(lengthInputrect);
  console.log(length);
//   get width
   const widthInput =document.getElementById('Rectangle-width');
   const widthText = widthInput.value;
   const width = parseFloat(widthText);
   console.log(width);

//    calculate rectangle area
const area = length*width;
console.log("Are of the rectangle:",area);

  
// display
const areaSpan = document.getElementById('rectangle-area');
areaSpan.innerText =area;

}