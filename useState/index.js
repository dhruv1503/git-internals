function useState(state){
    this.state = state;
    // function setState(callback){
    //     const newState = callback();
    //     return this.state = newState;
    // }
}
useState.prototype.setState = function(callback){
    const newState = callback();
        return this.state = newState;
}

const name =  new useState(null);
console.log(name.state)
name.setState(() => ("abc"))
console.log(name)
name.setState(() => ("Dhruv"));
console.log(name)

// function useState(initialState){
//     let state = initialState;
    
//     function setState(newState){
//         state = newState
//     }
    
//     return [state, setState]
// }

// const [name, setName] = useState("Dhruv")
// console.log(name);
// setName("Sanket");
// console.log(name)








// function userCreator(name, age = 0){
//     this.name = name;
//     this.age = age;
// }
// userCreator.prototype.updateAge = function(){
//         return ++ this.age
//     }


// const newUser = new userCreator("Rohit", 22);
// console.log(newUser);
// newUser.updateAge();
// console.log(newUser)
// const {name, age} = newUser;
// console.log(age)
// newUser.updateAge();
// console.log(age)
// console.log(newUser)
// newUser.updateAge();
// console.log(age)
// console.log(newUser)

