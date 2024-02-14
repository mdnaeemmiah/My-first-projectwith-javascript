function calculatetriangleArea(){
    const  triangleBaseInput = document.getElementById('traingle-base');
    const traingleBasetext = triangleBaseInput.value;
    const base = parseFloat(traingleBasetext);
    console.log( base);

    const triangleheightInput = document.getElementById('triangle-height');
    const traingleText = triangleheightInput.value;
    const height =parseFloat(traingleText);
    console.log(height);

    // calculate thje triangle
   const area = 0.5*base*height;
   console.log("Area of triangle is :",area);
   

//    display triangle area
const   trianglearea  =document.getElementById('triangle-area');
trianglearea.innerText=area;

}


