
var gifArray = ["embiid", "sixers", "iverson", "slam dunk"];


function alertGif() {
    var selectedGif = $(this).attr("newClass");
    alert(selectedGif);
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




$(document).on("click", ".giphy", alertGif);
addButton();
