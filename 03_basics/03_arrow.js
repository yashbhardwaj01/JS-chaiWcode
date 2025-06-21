const user = {
    username: "yash",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "bhardwaj"
// user.welcomeMessage()

console.log(this);  // O/P = {} (empty)



//----------------------------------------Arrow Functions ----------------------------//

function chai(){
    const username = "yash"
    console.log(this.username);
    
}
chai() // O/P = undefined

const chaii = () => {
    let username = "yash"
    console.log(this)
}
chai() // O/P = undefined

