$(document).ready(function () {
    //Get field inputs and save them to db with click of submit recipe
    let recipeName = $("#recipeName");
    let ingredientValue = $("#iInput");
    let directionsValue = $("#dInput");
    let submitRecipe = $("#submitRecipe");
    let selectUser = $("#userSelect");


    submitRecipe.on("click", event => {
        event.preventDefault();
        let newRecipe = {
            recipeName: recipeName.val().trim(),
            ingredients: ingredientValue.val().trim(),
            directions: directionsValue.val().trim()
        };
        console.log(newRecipe)
        $.ajax("/api/newRecipe", {
            type: "POST",
            data: newRecipe
        }).then(data => {
            console.log(data);
            window.location.href = "/api/newRecipe";
        });
    });



});