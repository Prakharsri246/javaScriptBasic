const users = [{firstName : "Prakhar" ,lastName:"Srivastava" , age:"26"},
{firstName : "Sanju" ,lastName:"Samson" , age:"75"},
{firstName : "Rohit" ,lastName:"Sharma" , age:"50"},
{firstName : "virat" ,lastName:"kohli" , age:"26"},]



const output = users.reduce(function(acc, curr) {
    if (curr.age < 30) {
        acc.push(curr);
    }
    return acc;
}, []).map((name)=>name.firstName)

console.log(output);

// const output = users.reduce(function(acc , curr){
   
//     if(acc[curr.age])
//     {
//       acc[curr.age]= ++acc[curr.age];
//     }
//     else  {
//         acc[curr.age] = 1;
//     }
//     return acc
// },{})

// const arr = [1,1,2,3,3,4,4,4]

// const output =  arr.reduce(function(acc ,curr){

//     if(acc[curr])
//     {
//         acc[curr]=++acc[curr];
//     }
//     else {
//         acc[curr]=1;
//     }
//     return acc;
// },{})
// console.log(output);

// const arr =[2,3,3,4,5,5,4,6]

// // arr= [2,3,4,5,6]
// const output = arr.reduce(function(acc, curr){
//     if(!acc.includes(curr))
//     {
//       acc.push(curr)
//     }
//     return acc ;
// },[])
// console.log(output);