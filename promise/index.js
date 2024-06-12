const API_Github="https://api.github.com/users/Prakharsri246"

const users= fetch(API_Github);

users.then(function(data){
    console.log(data);
})

