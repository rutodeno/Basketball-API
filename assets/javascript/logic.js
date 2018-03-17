
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

            var gifDiv = $("<div class= 'pics'>");
            var p=$("<p>").text("Rating: "+allGifs[i].rating);
            var gifPic = $("<img >");

            console.log(allGifs);

            gifPic.attr("src", allGifs[i].images.fixed_width_still.url);
            gifPic.attr("data-still",allGifs[i].images.fixed_width_still.url );
            gifPic.attr("data-animate",allGifs[i].images.fixed_width.url)
            gifPic.attr("data-state","still");
            gifPic.addClass("gif"); 

            gifDiv.append(p);
            gifDiv.append(gifPic);

            $("#newGifs").append(gifDiv);

        };  

        $(".gif").on("click", function(){

            var state = $(this).attr("data-state");        
            if(state === "still") {
                $(this).attr("src", $(this).attr("data-animate")); 
                $(this).attr("data-state", "animate");
        
                } else {
        
                $(this).attr("src", $(this).attr("data-still")); 
                $(this).attr("data-state", "still");
        
                }
        });

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
    addButton();

});




$(document).on("click", ".giphy", showGif);

addButton();
