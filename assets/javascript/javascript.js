

var topics = [
    "Goats",
    "Trout",
    "Birds",
    "Monkeys",
    "People",
    "Dogs",
    "Bears",
    "Elk",
    "Whales",
    "Turtles"
];

prepareButtons();


function prepareButtons() {

    for (var i = 0; i < topics.length; i++) {
        var animal = topics[i];
        var newDiv = "<button class ='animal_btn' id=" + animal + ">" + animal + "</button>"
        console.log(topics[i]);
        $("#animal_buttons").append(newDiv);
    }
}

function fetchSearchResults(animal) {
    // MY public key.
    var publicKey = "QKSu2uHkCrVU1A6eBbNlPWTdNORYtoRs";
    console.log("publicKey", publicKey);
    var limit = "10";
    var url = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=" + limit + "&api_key=" + publicKey;


    $.ajax({
        url,
        method: "GET",

    })

        .then(function (response) {

            var results = response.data;
            console.log("results", results);
            

            
             for (var k = 0; k < results.length; k++) {
            var rating = results[k].rating;
            var title = results[k].title;
            var stillImage = results[k].images.fixed_height_still.url;
            var gifImage = results[k].images.fixed_height.url;

            $("#container").append(`
            <div class='item'>
            <p>${title}</p>
            <img class="image-clicker" src="${stillImage}" data-still="${stillImage}" data-gif="${gifImage}" data-state="still">
            <p>${rating}: rating</p>
            </div>
            `);
             } 
        });

    }
    
    $(document).on("click", ".image-clicker", function(){
        // console.log($(this).attr("data-state"));
        // console.log($(this).attr("data-still"));
        // console.log($(this).attr("data-gif"));
        var data_state = "still";
        var data_still = "true";
        var data_gif =  "false";

        $(this).attr("data-state") === "still" ? $(this).attr("src", $(this).attr("data-state", "gif")) : $(this).attr("src", ($(this).attr("data-state", "still")));
        console.log($(this).attr("data-state"));
        console.log($(this).attr("data-still"));
        console.log($(this).attr("data-gif"));
        $(this).attr("data-state") === "still" ? $(this).attr("src", $(this).attr("data-state", "still")) : $(this).attr("src", ($(this).attr("data-state", "gif")));
        console.log($(this).attr("data-state"));
        $(this).attr("src", $(this).attr("data-gif"));
    });
$('.animal_btn').on('click', function () {

    event.preventDefault();
    var barAnimal = $(this).attr("id");

    console.log("barAnimal", barAnimal);
    fetchSearchResults(barAnimal);
});

//function to add new animals from user input
$('#animal_new').on('click', function () {

    event.preventDefault();

    //input from text box
    var newAnimal = $(this).attr("id");
    console.log("newAnimal", newAnimal);

    var text2 = $('<button></button>').text("New Animal");
    console.log("text2", text2);

    // see if animal already exists
    var dupAnimal = true;
    for (var j = 0; j < topics.length; j++) {
        if (topics[j] == newAnimal) {
            dupAnimal = false;

        }
    }

});

    //add new animal to the list and push to the topics array.
    // if (newAnimal == "") {
    //     alert("Empty buttons are not allowed.")
    // }
    // else if (dupAnimal) {
    //     topics.push(newAnimal)
    //     addNewButton();
    // }






