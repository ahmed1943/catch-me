const btn = document.querySelector("button")

btn.addEventListener('mouseover', function(){
    const height = Math.floor(Math.random()*window.innerHeight)
    const width = Math.floor(Math.random()*window.innerWidth)

    btn.style.left = `${width}px`
    btn.style.top = `${height}px`

})



btn.addEventListener('click' ,function(){
    btn.innerHTML = "you got me"
    document.body.style.backgroundColor='green'
})

// const btn = document.querySelector("#btn");

// btn.addEventListener('mouseover', function() {
//     console.log("mouse over");
//     // Generate random positions
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);

//     // Update button position
//     btn.style.left = `${width}px`;
//     btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', function() {
//     // Update button text and background color
//     btn.innerHTML = "You got me!";
//     document.body.style.backgroundColor = 'green';
// });




























// // btn.onclick = function (){
// //     alert("fuck you")
// // }
// btn.addEventListener('click',function(){
//     alert("fuck you")
//     btn.style.backgroundColor = "red"
    
// })

// btn.addEventListener('mouseover',function (){
//     btn.innerHTML= "stop trouncing me"
//     btn.style.backgroundColor = "green"
// })


// btn.addEventListener('mouseout',function (){
//     btn.innerHTML= "click me"
//     btn.style.backgroundColor = "blue"
// })

// window.addEventListener('scroll',function (){
//     console.log("stop scrolling")
// })