//alert("hello from javascript")
const users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image": "john.png",

    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image": "jane.png",
    }
]

var currentIndex=0;

function toggle(){
    if(currentIndex == 0)
        currentIndex = 1;
    else
        currentIndex = 0;
    document.getElementById("card-image").src = users[currentIndex].image;
    document.getElementById("card-name").innerText = users[currentIndex].name;
    document.getElementById("card-gender").innerText = users[currentIndex].gender;
}

function random(){

fetch("https://randomuser.me/api")
    .then(function(response){
        return response.json();
})
.then(function(data){
    var details = data.results[0];
    document.getElementById("card-image").src = details.picture.large;
    var fullname = details.name.title + " " + details.name.first + " " + details.name.last;
    document.getElementById("card-name").innerText = fullname;
    document.getElementById("card-gender").innerText = details.gender;

})

}