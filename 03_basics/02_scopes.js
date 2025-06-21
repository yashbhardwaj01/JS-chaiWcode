// scopes 

// let , const --> blocked scope 

// var -> global variable ----> not used 

function one(){
    const username = "yash"

    function two(){
        const website = "www.yt.com"
        console.log(username)     
    }
    // console.log(website)

    two()

}
one()


if(true){
    const username = "yash"
    if(username == "yash"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website);
    
}
    // console.log(username);
    

    // ------------------------------------Interesting topic ------------------
    
    
function addOne(num){
    return num+1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(7)
