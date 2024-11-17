// console.log("hello World!")

// var maths = Math.random () * 2
// console.log(Math.ceil(maths));



var output = document.querySelector("#output");
var img = document.querySelector("img");
var num


// var maths = Math.random() * 2
// console.log(Math.ceil(maths));



function coin(para) {
    
    num =  Math.ceil(Math.random(num) * 2)
    
    if (para === 1 && num === 1 || para === 2 && num === 2) {

        output.innerHTML = "The Winner Is Head!"
        console.log("You Win The Toss!" + num);
        
    } 
    else {
    
        console.log("You Loss The Toss!" + num);
        output.innerHTML = "The Winner Is Tail!"
    
    }
    
    if (num === 1) {
       
        img.src = "./Assets/Capture.PNG"
    
    } else if (num === 2) {
        
        img.src = "./Assets/Capture 2.PNG"
      }
}   
