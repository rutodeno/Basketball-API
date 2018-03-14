
var gifArray = ["embiid", "sixers", "iverson", "slam dunk"];


function showGif() {
    var selectedGif = $(this).attr("newClass");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+selectedGif+"&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url:queryURL,
        methos:"GET"

    }).then(function(response){

        var allGifs = response.data;

        for (var i =0; i<allGifs.length; i++){

            var gifDiv = $("<div>");
            var p=$("<p>").text("Rating: "+allGifs[i].rating);
            var gifPic = $("<img>");

            gifPic.attr("src", allGifs[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(gifPic);

            $("#newGifs").append(gifDiv);

        };  

    });
};


function addButton() {

    $("#newGifs").empty();

    for (var i = 0; i < gifArray.length; i++) {

        var newButton = $("<button>");

        newButton.addClass("giphy");
        newButton.attr("newClass", gifArray[i]);
        newButton.text(gifArray[i]);
        $("#newGifs").append(newButton);


    };
};

addButton();

$("#find-gif").on("click", function (event) {

    event.preventDefault();

    var addGif = $("#gif-input").val().trim();

    gifArray.push(addGif);

    console.log("i'm  working");

    addButton();

});

$(".giphy").on("click", function(){

    var currentState = $(this).attr("")
});




$(document).on("click", ".giphy", showGif);
addButton();
