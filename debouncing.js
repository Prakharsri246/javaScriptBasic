
let count =0;
const getData = ()=>{
    //calls an api and gets Data 
    console.log("Fetching Data.." , count ++);
}

const doSomeMagic=  function (fn, delay){
    let timer;
    return function (){
        let args= arguments,
        context=this;
      clearTimeout(timer);
       timer =  setTimeout(()=>{
            getData.apply(context,args);
        },delay);
    }
}

const betterFunction = doSomeMagic(getData, 300);