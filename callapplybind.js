let nameObj = {
    firstName:"Prakhar",
    lastName:"Srivastava"
}

let name2Obj={
    firstName:"Akshay",
    lastName:"Saini",
}

let printName =  function (hometown , state)
{
    console.log(this.firstName + " " + this.lastName + " "+hometown + " "+ state);
}


// function Borrowing 

//call

//  printName.call(nameObj ,"Lucknow","Up" );

 //appy

//  printName.apply(nameObj , ["Lucknow" ,"UP"])
//BIND
const nameInfo =  printName.bind(name2Obj ,"Dehradun"  ,"UK")

console.log(nameInfo ,"nameInfo");

nameInfo();