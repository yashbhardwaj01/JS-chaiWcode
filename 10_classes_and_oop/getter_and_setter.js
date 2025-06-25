class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }

}
const yash = new User("yb@google.com", "1234")
console.log(yash.password);
