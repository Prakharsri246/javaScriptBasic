const users = [{firstName : "Prakhar" ,lastName:"Srivastava" , age:"26"},
{firstName : "Sanju" ,lastName:"Samson" , age:"75"},
{firstName : "Rohit" ,lastName:"Sharma" , age:"50"},
{firstName : "virat" ,lastName:"kohli" , age:"26"},]


const output = users.filter((x)=>{
    if(x.age < 30)
    {
        return x;
    }
}).map((name)=>name.firstName)
console.log(output);