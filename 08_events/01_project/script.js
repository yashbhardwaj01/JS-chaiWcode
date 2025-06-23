// generate a random color 

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color

}

let intervalId // outside bcoz of scope as we r using it in clearInterval

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor , 1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null; // derefrencing the intervalId value to null to restart again after stopping 
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)