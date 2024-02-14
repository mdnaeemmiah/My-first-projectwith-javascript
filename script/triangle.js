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

// Parallelo

// function calculatetriangleArea(){
//     const  ParallelogramBaseInput = document.getElementById('Parallelogram-base');
//     const ParallelogramBasetext = ParallelogramBaseInput.value;
//     const base = parseFloat(ParallelogramBasetext);
//     console.log( base);

//     const triangleheightInput = document.getElementById('triangle-height');
//     const ParallelogramText = ParallelogramheightInput.value;
//     const height =parseFloat(ParallelogramText);
//     console.log(height);

//     // calculate thje triangle
//    const Area = base*height;
//    console.log("Area of Parallelogram is :",Area);
   

// //    display triangle area
// const   Parallelogramarea  =document.getElementById('Parallelogram-area');
// Parallelogramarea.innerText=Area;

// }
