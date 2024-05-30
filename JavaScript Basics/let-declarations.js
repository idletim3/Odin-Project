if (true) {
    let test = true;
}

console.log(test); // true


for (let userID = 0; userID < 100; userID++){
    let jobRole = "employee";
}

console.log(userID);
console.log(jobRole);


function miau(){
  if (true){
    let role = "Administrator";
  }
  console.log(role);
}

miau(); // Administrator
console.log(role); // Uncaught ReferenceError ReferenceError: bestAnimal is not defined


let declaredVariable = "Taken"; // Cannot redeclare block-scoped variable 'declaredVariable'.ts(2451)
let declaredVariable = "Will thtrow an error." // Cannot redeclare block-scoped variable 'declaredVariable'.ts(2451)
