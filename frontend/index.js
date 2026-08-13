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