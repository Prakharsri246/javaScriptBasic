// const API_Github="https://api.github.com/users/Prakharsri246"

// const users= fetch(API_Github);

// users.then(function(data){
//     console.log(data);
// })

//How we create a Promise

const cart = ["shoes", "pants", "kurta"];

//Consuming the Promise
///passing things down the chain
 createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function(orderId){  
 return proceedToPayment(orderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create Order
    //Validate Cart -->true/false
    if (!validateCart(cart)) {
      const err = new Error("Cart Not Valid");
      reject(err);
    } else {
      const orderId = "13333";
    setTimeout(() => {
        resolve(orderId);
    },[5000]);
      
    }
  });

  return pr;
}

function validateCart() {
  return false;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve ,reject){
        resolve("Payment Successfull");
    })
}
