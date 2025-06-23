const clock = document.getElementById('clock')

setInterval(function (){
    let date = new Date()
    // console.log(date.toLocalTimeString())
    clock.innerHTML = date.toLocaleTimeString();
},1000)

// IMPORTANT 🚀 
// setInterval contains function and time interval ,after how much second(in ms) time should update  