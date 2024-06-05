//Writing your own Bind method

let name1 = {
    firstName:"Prakhar",
    lastName:"Srivastava"
}

const printName = function(hometown, state){

    console.log(this.firstName + " " + this.lastName +" " + hometown+","+state );
}

//Bind
// const nameInfo = printName.bind(name1)
// nameInfo();



Function.prototype.myBind = function(...args){
     console.log(...args ,"args");
    let obj = this;  //Pointing to printName method
    let params = args.slice(1);
    return function (...args2){
        obj.apply(args[0], [...params , ...args2])  
    }

}


let nameInfo = printName.myBind(name1,"Lucknow");
nameInfo("Up");